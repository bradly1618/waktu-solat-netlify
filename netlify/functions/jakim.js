const fs = require("node:fs/promises");
const path = require("node:path");

exports.handler = async function handler(event) {
  const zone = (event.queryStringParameters?.zone || "").toUpperCase();

  if (!zone) {
    return jsonResponse(400, { error: "Missing zone parameter." });
  }

  const endpoint = `https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&zone=${encodeURIComponent(zone)}&period=today`;

  try {
    const data = await fetchWithRetry(endpoint);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    const cached = await readCachedPrayerTimes(zone);
    if (cached) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
        },
        body: JSON.stringify(cached),
      };
    }

    return jsonResponse(500, {
      error: "Unable to reach JAKIM.",
      detail: error.message,
    });
  }
};

async function fetchWithRetry(url) {
  const attempts = 3;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "WaktuSolatNetlifyDemo/1.0",
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`JAKIM request failed with status ${response.status}.`);
      }

      return await response.json();
    } catch (error) {
      if (attempt === attempts) {
        throw error;
      }

      await sleep(1000 * attempt);
    } finally {
      clearTimeout(timeout);
    }
  }
}

async function readCachedPrayerTimes(zone) {
  try {
    const now = new Date();
    const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const dateKey = formatDateKey(now);
    const monthlyPath = path.join(process.cwd(), "data", "fallback", `${monthKey}.json`);
    const yearlyPath = path.join(process.cwd(), "data", "fallback", "yearly", `${now.getFullYear()}.json`);

    const monthly = await readCachedPrayerFromFile(monthlyPath, zone, dateKey);
    if (monthly) {
      return monthly;
    }

    return await readCachedPrayerFromFile(yearlyPath, zone, dateKey);
  } catch {
    return null;
  }
}

async function readCachedPrayerFromFile(filePath, zone, dateKey) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const payload = JSON.parse(raw);
    const zonePayload = payload.zones?.[zone];
    const today = zonePayload?.prayerTime?.find((entry) => entry.date === dateKey);

    if (!zonePayload || !today) {
      return null;
    }

    return {
      prayerTime: [today],
      status: "OK! (cache fallback)",
      serverTime: new Date().toISOString(),
      periodType: "today",
      lang: "ms_my",
      zone,
      generatedAt: payload.generatedAt,
      source: "cache",
    };
  } catch {
    return null;
  }
}

function formatDateKey(date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = String(date.getDate()).padStart(2, "0");
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}
