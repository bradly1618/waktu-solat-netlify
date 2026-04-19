const PRAYER_FIELDS = [
  ["imsak", "Imsak"],
  ["fajr", "Subuh"],
  ["syuruk", "Syuruk"],
  ["dhuhr", "Zohor"],
  ["asr", "Asar"],
  ["maghrib", "Maghrib"],
  ["isha", "Isyak"],
];

const ZONES = [
  { code: "JHR01", label: "Pulau Aur dan Pulau Pemanggil", state: "Johor", aliases: ["pulau aur", "pulau pemanggil"] },
  { code: "JHR02", label: "Johor Bahru, Kota Tinggi, Mersing", state: "Johor", aliases: ["johor bahru", "jb", "kota tinggi", "mersing"] },
  { code: "JHR03", label: "Kluang, Pontian", state: "Johor", aliases: ["kluang", "pontian"] },
  { code: "JHR04", label: "Batu Pahat, Muar, Segamat, Gemas Johor", state: "Johor", aliases: ["batu pahat", "muar", "segamat", "gemas"] },
  { code: "KDH01", label: "Kota Setar, Kubang Pasu, Pokok Sena", state: "Kedah", aliases: ["kota setar", "alor setar", "kubang pasu", "pokok sena"] },
  { code: "KDH02", label: "Kuala Muda, Yan, Pendang", state: "Kedah", aliases: ["kuala muda", "sungai petani", "yan", "pendang"] },
  { code: "KDH03", label: "Padang Terap, Sik", state: "Kedah", aliases: ["padang terap", "sik"] },
  { code: "KDH04", label: "Baling", state: "Kedah", aliases: ["baling"] },
  { code: "KDH05", label: "Bandar Baharu, Kulim", state: "Kedah", aliases: ["bandar baharu", "kulim"] },
  { code: "KDH06", label: "Langkawi", state: "Kedah", aliases: ["langkawi", "kuah"] },
  { code: "KDH07", label: "Puncak Gunung Jerai", state: "Kedah", aliases: ["gunung jerai"] },
  { code: "KTN01", label: "Bachok, Kota Bharu, Machang, Pasir Mas, Pasir Puteh, Tanah Merah, Tumpat, Kuala Krai, Mukim Chiku", state: "Kelantan", aliases: ["bachok", "kota bharu", "machang", "pasir mas", "pasir puteh", "tanah merah", "tumpat", "kuala krai", "chiku", "gua musang utara"] },
  { code: "KTN03", label: "Gua Musang, Jeli", state: "Kelantan", aliases: ["gua musang", "jeli", "galas", "bertam"] },
  { code: "MLK01", label: "Seluruh Negeri Melaka", state: "Melaka", aliases: ["melaka", "malacca", "alor gajah", "jasin", "melaka tengah"] },
  { code: "NGS01", label: "Tampin, Jempol", state: "Negeri Sembilan", aliases: ["tampin", "jempol"] },
  { code: "NGS02", label: "Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban", state: "Negeri Sembilan", aliases: ["jelebu", "kuala pilah", "port dickson", "pd", "rembau", "seremban"] },
  { code: "PHG01", label: "Pulau Tioman", state: "Pahang", aliases: ["pulau tioman", "tioman"] },
  { code: "PHG02", label: "Kuantan, Pekan, Rompin, Muadzam Shah", state: "Pahang", aliases: ["kuantan", "pekan", "rompin", "muadzam shah"] },
  { code: "PHG03", label: "Jerantut, Temerloh, Maran, Bera, Chenor, Jengka", state: "Pahang", aliases: ["jerantut", "temerloh", "maran", "bera", "chenor", "jengka"] },
  { code: "PHG04", label: "Bentong, Lipis, Raub", state: "Pahang", aliases: ["bentong", "lipis", "raub"] },
  { code: "PHG05", label: "Genting Sempah, Janda Baik, Bukit Tinggi", state: "Pahang", aliases: ["genting sempah", "janda baik", "bukit tinggi"] },
  { code: "PHG06", label: "Cameron Highlands, Genting Highlands, Bukit Fraser", state: "Pahang", aliases: ["cameron highlands", "tanah rata", "genting highlands", "bukit fraser", "fraser's hill", "fraser hill"] },
  { code: "PLS01", label: "Kangar, Padang Besar, Arau", state: "Perlis", aliases: ["kangar", "padang besar", "arau", "perlis"] },
  { code: "PNG01", label: "Seluruh Negeri Pulau Pinang", state: "Pulau Pinang", aliases: ["pulau pinang", "penang", "seberang perai", "george town", "bukit mertajam", "balik pulau", "nibong tebal"] },
  { code: "PRK01", label: "Tapah, Slim River, Tanjung Malim", state: "Perak", aliases: ["tapah", "slim river", "tanjung malim", "muallim"] },
  { code: "PRK02", label: "Kuala Kangsar, Sg. Siput, Ipoh, Batu Gajah, Kampar", state: "Perak", aliases: ["kuala kangsar", "sungai siput", "sg siput", "ipoh", "batu gajah", "kampar"] },
  { code: "PRK03", label: "Lenggong, Pengkalan Hulu, Grik", state: "Perak", aliases: ["lenggong", "pengkalan hulu", "gerik", "grik"] },
  { code: "PRK04", label: "Temengor, Belum", state: "Perak", aliases: ["temengor", "belum"] },
  { code: "PRK05", label: "Kg Gajah, Teluk Intan, Bagan Datuk, Seri Iskandar, Beruas, Parit, Lumut, Sitiawan, Pulau Pangkor", state: "Perak", aliases: ["kampung gajah", "kg gajah", "teluk intan", "bagan datuk", "seri iskandar", "beruas", "parit", "lumut", "sitiawan", "pulau pangkor", "pangkor", "manjung", "perak tengah", "hilir perak"] },
  { code: "PRK06", label: "Selama, Taiping, Bagan Serai, Parit Buntar", state: "Perak", aliases: ["selama", "taiping", "bagan serai", "parit buntar", "kerian", "larut"] },
  { code: "PRK07", label: "Bukit Larut", state: "Perak", aliases: ["bukit larut", "maxwell hill"] },
  { code: "SBH01", label: "Sandakan Timur", state: "Sabah", aliases: ["bukit garam", "semawang", "temanggong", "tambisan", "sandakan", "sukau"] },
  { code: "SBH02", label: "Beluran, Telupid, Pinangah, Terusan, Kuamut", state: "Sabah", aliases: ["beluran", "telupid", "pinangah", "terusan", "kuamut"] },
  { code: "SBH03", label: "Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku", state: "Sabah", aliases: ["lahad datu", "silabukan", "kunak", "sahabat", "semporna", "tungku"] },
  { code: "SBH04", label: "Bandar Tawau, Balong, Merotai, Kalabakan", state: "Sabah", aliases: ["tawau", "balong", "merotai", "kalabakan"] },
  { code: "SBH05", label: "Kudat, Kota Marudu, Pitas, Pulau Banggi", state: "Sabah", aliases: ["kudat", "kota marudu", "pitas", "pulau banggi", "banggi"] },
  { code: "SBH06", label: "Gunung Kinabalu", state: "Sabah", aliases: ["gunung kinabalu", "mount kinabalu"] },
  { code: "SBH07", label: "Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan", state: "Sabah", aliases: ["kota kinabalu", "ranau", "kota belud", "tuaran", "penampang", "papar", "putatan"] },
  { code: "SBH08", label: "Pensiangan, Keningau, Tambunan, Nabawan", state: "Sabah", aliases: ["pensiangan", "keningau", "tambunan", "nabawan"] },
  { code: "SBH09", label: "Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Weston", state: "Sabah", aliases: ["beaufort", "kuala penyu", "sipitang", "tenom", "long pa sia", "membakut", "weston"] },
  { code: "SGR01", label: "Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, Shah Alam", state: "Selangor", aliases: ["gombak", "petaling", "sepang", "hulu langat", "hulu selangor", "shah alam", "subang jaya", "petaling jaya", "ampang", "kajang", "rawang"] },
  { code: "SGR02", label: "Kuala Selangor, Sabak Bernam", state: "Selangor", aliases: ["kuala selangor", "sabak bernam"] },
  { code: "SGR03", label: "Klang, Kuala Langat", state: "Selangor", aliases: ["klang", "kuala langat", "banting"] },
  { code: "SWK01", label: "Limbang, Lawas, Sundar, Trusan", state: "Sarawak", aliases: ["limbang", "lawas", "sundar", "trusan"] },
  { code: "SWK02", label: "Miri, Niah, Bekenu, Sibuti, Marudi", state: "Sarawak", aliases: ["miri", "niah", "bekenu", "sibuti", "marudi"] },
  { code: "SWK03", label: "Pandan, Belaga, Suai, Tatau, Sebauh, Bintulu", state: "Sarawak", aliases: ["pandan", "belaga", "suai", "tatau", "sebauh", "bintulu"] },
  { code: "SWK04", label: "Sibu, Mukah, Dalat, Song, Igan, Oya, Balingian, Kanowit, Kapit", state: "Sarawak", aliases: ["sibu", "mukah", "dalat", "song", "igan", "oya", "balingian", "kanowit", "kapit"] },
  { code: "SWK05", label: "Sarikei, Matu, Julau, Rajang, Daro, Bintangor, Belawai", state: "Sarawak", aliases: ["sarikei", "matu", "julau", "rajang", "daro", "bintangor", "belawai"] },
  { code: "SWK06", label: "Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa, Saratok", state: "Sarawak", aliases: ["lubok antu", "sri aman", "roban", "debak", "kabong", "lingga", "engkelili", "betong", "spaoh", "pusa", "saratok"] },
  { code: "SWK07", label: "Serian, Simunjan, Samarahan, Sebuyau, Meludam", state: "Sarawak", aliases: ["serian", "simunjan", "samarahan", "kota samarahan", "sebuyau", "meludam"] },
  { code: "SWK08", label: "Kuching, Bau, Lundu, Sematan", state: "Sarawak", aliases: ["kuching", "bau", "lundu", "sematan"] },
  { code: "SWK09", label: "Zon Khas Kampung Patarikan", state: "Sarawak", aliases: ["kampung patarikan", "patarikan"] },
  { code: "TRG01", label: "Kuala Terengganu, Marang, Kuala Nerus", state: "Terengganu", aliases: ["kuala terengganu", "marang", "kuala nerus"] },
  { code: "TRG02", label: "Besut, Setiu", state: "Terengganu", aliases: ["besut", "setiu"] },
  { code: "TRG03", label: "Hulu Terengganu", state: "Terengganu", aliases: ["hulu terengganu"] },
  { code: "TRG04", label: "Dungun, Kemaman", state: "Terengganu", aliases: ["dungun", "kemaman", "chukai", "kijal"] },
  { code: "WLY01", label: "Kuala Lumpur, Putrajaya", state: "Wilayah Persekutuan", aliases: ["kuala lumpur", "putrajaya", "wilayah persekutuan kuala lumpur", "wilayah persekutuan putrajaya"] },
  { code: "WLY02", label: "Labuan", state: "Wilayah Persekutuan", aliases: ["labuan", "wilayah persekutuan labuan"] },
];

const SINGLE_ZONE_STATES = new Map([
  ["melaka", "MLK01"],
  ["malacca", "MLK01"],
  ["perlis", "PLS01"],
  ["pulau pinang", "PNG01"],
  ["penang", "PNG01"],
]);

const STATE_META = {
  Johor: {
    shortLabel: "Johor",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Johor.svg",
  },
  Kedah: {
    shortLabel: "Kedah",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Kedah.svg",
  },
  Kelantan: {
    shortLabel: "Kelantan",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Kelantan.svg",
  },
  Melaka: {
    shortLabel: "Melaka",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Malacca.svg",
  },
  "Negeri Sembilan": {
    shortLabel: "N. Sembilan",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Negeri_Sembilan.svg",
  },
  Pahang: {
    shortLabel: "Pahang",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Pahang.svg",
  },
  Perlis: {
    shortLabel: "Perlis",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Perlis.svg",
  },
  "Pulau Pinang": {
    shortLabel: "Penang",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Penang.svg",
  },
  Perak: {
    shortLabel: "Perak",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Perak.svg",
  },
  Sabah: {
    shortLabel: "Sabah",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Sabah.svg",
  },
  Sarawak: {
    shortLabel: "Sarawak",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Sarawak.svg",
  },
  Selangor: {
    shortLabel: "Selangor",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Selangor.svg",
  },
  Terengganu: {
    shortLabel: "Terengganu",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_Terengganu.svg",
  },
  "Wilayah Persekutuan": {
    shortLabel: "W.P.",
    flag: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flag_of_the_Federal_Territories_of_Malaysia.svg",
  },
};

const ZONE_SELECT = document.querySelector("#zone-select");
const ZONE_SEARCH = document.querySelector("#zone-search");
const STATE_FILTER = document.querySelector("#state-filter");
const ZONE_LIST = document.querySelector("#zone-list");
const SELECTED_ZONE_CARD = document.querySelector("#selected-zone-card");
const MANUAL_TOGGLE = document.querySelector("#manual-toggle");
const MANUAL_PICKER_PANEL = document.querySelector("#manual-picker-panel");
const MOBILE_PRAYER_ANCHOR = document.querySelector("#mobile-prayer-anchor");
const PRAYER_PANEL = document.querySelector(".prayer-panel");
const NOTICE = document.querySelector("#notice");
const PLACE_OUTPUT = document.querySelector("#place-output");
const ZONE_OUTPUT = document.querySelector("#zone-output");
const META_OUTPUT = document.querySelector("#meta-output");
const UPDATED_OUTPUT = document.querySelector("#updated-output");
const SOURCE_OUTPUT = document.querySelector("#source-output");
const PRAYER_GRID = document.querySelector("#prayer-grid");
const CARD_TEMPLATE = document.querySelector("#prayer-card-template");
const DETECT_BUTTON = document.querySelector("#detect-button");
const REFRESH_BUTTON = document.querySelector("#refresh-button");

let activeZone = "";
let lastPlace = "";
let activeStateFilter = "All";
let searchQuery = "";
let selectionMode = "manual";
init();

function init() {
  populateZoneOptions();
  renderStateFilters();
  const savedZone = localStorage.getItem("jakim-zone") || "WLY01";
  selectionMode = localStorage.getItem("selection-mode") || "manual";
  ZONE_SELECT.value = savedZone;
  PLACE_OUTPUT.textContent = "Manual selection / last saved zone";
  setZone(savedZone, "Manual zone selected.");
  renderZoneList();

  ZONE_SELECT.addEventListener("change", () => {
    setSelectionMode("manual");
    setZone(ZONE_SELECT.value, "Manual zone selected.");
    fetchPrayerTimes(ZONE_SELECT.value);
  });

  ZONE_SEARCH.addEventListener("input", () => {
    searchQuery = ZONE_SEARCH.value.trim().toLowerCase();
    renderZoneList();
  });

  MANUAL_TOGGLE.addEventListener("click", () => {
    const collapsed = MANUAL_PICKER_PANEL.dataset.collapsed === "true";
    setManualPickerCollapsed(!collapsed);
  });

  DETECT_BUTTON.addEventListener("click", detectLocation);
  REFRESH_BUTTON.addEventListener("click", () => fetchPrayerTimes(activeZone || ZONE_SELECT.value));
  syncMobileLayout();
  window.addEventListener("resize", syncMobileLayout);
  fetchPrayerTimes(savedZone);
}

function populateZoneOptions() {
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a JAKIM zone";
  ZONE_SELECT.append(placeholder);

  for (const zone of ZONES) {
    const option = document.createElement("option");
    option.value = zone.code;
    option.textContent = `${zone.code} - ${zone.label}`;
    ZONE_SELECT.append(option);
  }
}

function renderStateFilters() {
  const states = ["All", ...new Set(ZONES.map((zone) => zone.state))];
  STATE_FILTER.innerHTML = "";

  for (const state of states) {
    const meta = STATE_META[state];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state === activeStateFilter ? " is-active" : ""}`;
    button.innerHTML = `${renderFlag(meta?.flag, `${state} flag`)}<span>${meta?.shortLabel || state}</span>`;
    button.addEventListener("click", () => {
      activeStateFilter = state;
      renderStateFilters();
      renderZoneList();
    });
    STATE_FILTER.append(button);
  }
}

function renderZoneList() {
  ZONE_LIST.innerHTML = "";
  const filteredZones = ZONES.filter((zone) => {
    const matchesState = activeStateFilter === "All" || zone.state === activeStateFilter;
    const haystack = `${zone.code} ${zone.label} ${zone.state} ${zone.aliases.join(" ")}`.toLowerCase();
    const matchesSearch = !searchQuery || haystack.includes(searchQuery);
    return matchesState && matchesSearch;
  });

  if (filteredZones.length === 0) {
    const empty = document.createElement("p");
    empty.className = "source-note";
    empty.textContent = "No zones match that search yet. Try a state name, city, or zone code.";
    ZONE_LIST.append(empty);
    return;
  }

  for (const zone of filteredZones) {
    const meta = STATE_META[zone.state];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `zone-option${zone.code === activeZone ? " is-selected" : ""}`;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", zone.code === activeZone ? "true" : "false");
    button.innerHTML = `<strong>${zone.code} - ${zone.state}</strong><span>${zone.label}</span>`;
    button.addEventListener("click", () => {
      ZONE_SELECT.value = zone.code;
      setSelectionMode("manual");
      setZone(zone.code, "Manual zone selected.");
      renderZoneList();
      fetchPrayerTimes(zone.code);
    });
    if (meta?.flag) {
      button.insertAdjacentHTML("afterbegin", renderFlag(meta.flag, `${zone.state} flag`));
    }
    ZONE_LIST.append(button);
  }
}

function setNotice(message, isError = false) {
  NOTICE.textContent = message;
  NOTICE.style.color = isError ? "#8b2e16" : "";
}

function setZone(zoneCode, message) {
  const zone = ZONES.find((entry) => entry.code === zoneCode);
  activeZone = zoneCode;
  localStorage.setItem("jakim-zone", zoneCode);
  ZONE_OUTPUT.textContent = zone ? `${zone.code} - ${zone.label}` : zoneCode;
  SELECTED_ZONE_CARD.innerHTML = zone
    ? `${renderFlag(STATE_META[zone.state]?.flag, `${zone.state} flag`, true)}<div class="selected-zone-copy"><span class="status-label">Current manual selection</span><strong id="selected-zone-output">${zone.code} - ${zone.label}</strong></div>`
    : `<div class="selected-zone-copy"><span class="status-label">Current manual selection</span><strong id="selected-zone-output">${zoneCode}</strong></div>`;
  if (message) {
    setNotice(message, false);
  }
  if (zone) {
    renderZoneList();
  }
}

function setSelectionMode(mode) {
  selectionMode = mode;
  localStorage.setItem("selection-mode", mode);
}

function setManualPickerCollapsed(collapsed) {
  MANUAL_PICKER_PANEL.dataset.collapsed = collapsed ? "true" : "false";
  MANUAL_TOGGLE.setAttribute("aria-expanded", collapsed ? "false" : "true");
  MANUAL_TOGGLE.textContent = collapsed ? "Choose Zone Manually" : "Hide Manual Picker";
}

function syncMobileLayout() {
  const isMobile = window.matchMedia("(max-width: 560px)").matches;
  if (isMobile) {
    PRAYER_PANEL.parentElement?.insertBefore(PRAYER_PANEL, MOBILE_PRAYER_ANCHOR.nextSibling);
    setManualPickerCollapsed(true);
  } else {
    const controlsPanel = document.querySelector(".controls");
    if (controlsPanel && PRAYER_PANEL.nextElementSibling?.classList.contains("zone-guide")) {
      controlsPanel.parentElement?.insertBefore(PRAYER_PANEL, document.querySelector(".zone-guide"));
    }
    MANUAL_PICKER_PANEL.dataset.collapsed = "false";
    MANUAL_TOGGLE.setAttribute("aria-expanded", "true");
    MANUAL_TOGGLE.textContent = "Choose Zone Manually";
  }
}

function renderFlag(src, alt, isLarge = false) {
  if (!src) return "";
  return `<img class="flag-badge${isLarge ? " flag-large" : ""}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
}

async function detectLocation() {
  if (!navigator.geolocation) {
    setNotice("This browser does not support geolocation. Please use the manual zone list.", true);
    return;
  }

  setNotice("Requesting location access...");

  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      try {
        const place = await reverseGeocode(coords.latitude, coords.longitude);
        const resolvedZone = resolveZoneFromPlace(place);
        lastPlace = place.displayName;
        PLACE_OUTPUT.textContent = place.displayName;

        if (!resolvedZone) {
          setNotice("Location found, but the JAKIM zone still needs manual confirmation.", true);
          return;
        }

        ZONE_SELECT.value = resolvedZone.code;
        setSelectionMode("auto");
        setZone(
          resolvedZone.code,
          `Detected ${resolvedZone.code} from nearby location data. You can still change it manually if needed.`,
        );
        await fetchPrayerTimes(resolvedZone.code);
      } catch (error) {
        console.error(error);
        setNotice(error.message || "Could not detect your JAKIM zone.", true);
      }
    },
    (error) => {
      const reason = error.code === 1 ? "Location permission was denied." : "Unable to get your coordinates.";
      setNotice(`${reason} Please choose a zone manually or keep using your saved zone.`, true);
    },
    {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 300000,
    },
  );
}

async function reverseGeocode(latitude, longitude) {
  const roundedKey = `${latitude.toFixed(3)},${longitude.toFixed(3)}`;
  const cached = sessionStorage.getItem(`reverse:${roundedKey}`);
  if (cached) {
    return JSON.parse(cached);
  }

  const response = await fetch(`/.netlify/functions/reverse-geocode?lat=${latitude}&lon=${longitude}`);
  if (!response.ok) {
    throw new Error("Reverse geocoding failed. Please choose your zone manually.");
  }

  const data = await response.json();
  const addressParts = [
    data.name,
    data.address?.city,
    data.address?.town,
    data.address?.municipality,
    data.address?.county,
    data.address?.state_district,
    data.address?.state,
    data.address?.country,
  ].filter(Boolean);

  const place = {
    address: data.address || {},
    displayName: [...new Set(addressParts)].join(", "),
  };

  sessionStorage.setItem(`reverse:${roundedKey}`, JSON.stringify(place));
  return place;
}

function resolveZoneFromPlace(place) {
  const tokens = buildTokens(place.address);

  for (const zone of ZONES) {
    if (zone.aliases.some((alias) => tokens.has(normalize(alias)))) {
      return zone;
    }
  }

  for (const stateName of tokens) {
    const singleZone = SINGLE_ZONE_STATES.get(stateName);
    if (singleZone) {
      return ZONES.find((zone) => zone.code === singleZone);
    }
  }

  if (tokens.has("kuala lumpur") || tokens.has("putrajaya")) {
    return ZONES.find((zone) => zone.code === "WLY01");
  }

  if (tokens.has("labuan")) {
    return ZONES.find((zone) => zone.code === "WLY02");
  }

  return null;
}

function buildTokens(address) {
  const fields = [
    address?.name,
    address?.road,
    address?.suburb,
    address?.village,
    address?.hamlet,
    address?.town,
    address?.city,
    address?.municipality,
    address?.county,
    address?.district,
    address?.state_district,
    address?.state,
    address?.region,
    address?.island,
  ].filter(Boolean);

  const tokens = new Set();

  for (const value of fields) {
    const normalized = normalize(value);
    if (!normalized) continue;

    tokens.add(normalized);

    for (const piece of normalized.split(",")) {
      const trimmed = piece.trim();
      if (trimmed) {
        tokens.add(trimmed);
      }
    }
  }

  return tokens;
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/\bdaerah\b/g, "")
    .replace(/\bwilayah persekutuan\b/g, "wilayah persekutuan")
    .replace(/[^\w\s,-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchPrayerTimes(zoneCode) {
  if (!zoneCode) {
    setNotice("Please select a zone first.", true);
    return;
  }

  setNotice("Loading prayer times...");

  try {
    const { payload, today, source, generatedAt } = await loadPrayerTimes(zoneCode);
    renderPrayerTimes(today);
    META_OUTPUT.textContent = `${payload.zone} | ${today.day}, ${today.date} | Source: cached prayer data`;
    UPDATED_OUTPUT.textContent = `Last updated: ${formatGeneratedAt(generatedAt)}`;
    SOURCE_OUTPUT.textContent = "Showing bundled cached prayer times for fast loading.";
    const zone = ZONES.find((entry) => entry.code === zoneCode);
    const placeSuffix = selectionMode === "auto" && lastPlace ? ` near ${lastPlace}` : "";
    const zoneLabel = zone ? `${zone.label}${selectionMode === "manual" ? ` - ${zone.state}` : ""}` : "";
    setNotice(
      zone
        ? `Showing today's prayer times for ${zoneLabel}${placeSuffix}.`
        : "Prayer times updated.",
    );
  } catch (error) {
    console.error(error);
    META_OUTPUT.textContent = "Unable to load prayer times.";
    UPDATED_OUTPUT.textContent = "Last updated: unavailable";
    SOURCE_OUTPUT.textContent = "No live or cached prayer-time data is available for the selected zone.";
    PRAYER_GRID.innerHTML = "";
    setNotice(error.message || "Prayer time request failed.", true);
  }
}

async function loadPrayerTimes(zoneCode) {
  const cachedResult = await tryCachedPrayerTimes(zoneCode);

  if (cachedResult) {
    return cachedResult;
  }

  throw new Error("Unable to load cached prayer times for the selected zone.");
}

async function tryCachedPrayerTimes(zoneCode) {
  const now = new Date();
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const yearKey = String(now.getFullYear());

  try {
    const monthly = await readCachedFile(`./data/fallback/${monthKey}.json`, zoneCode, now);
    if (monthly) {
      return monthly;
    }

    const yearly = await readCachedFile(`./data/fallback/yearly/${yearKey}.json`, zoneCode, now);
    if (yearly) {
      return yearly;
    }

    throw new Error("Cached prayer times do not include the selected zone/date.");
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function readCachedFile(filePath, zoneCode, now) {
  const response = await fetch(filePath);
  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  const zonePayload = payload.zones?.[zoneCode];
  const todayKey = formatDateKey(now);
  const today = zonePayload?.prayerTime?.find((entry) => entry.date === todayKey);

  if (!zonePayload || !today) {
    return null;
  }

  return {
    payload: {
      zone: zoneCode,
      prayerTime: zonePayload.prayerTime,
    },
    today,
    source: "cache",
    generatedAt: payload.generatedAt,
  };
}

function renderPrayerTimes(times) {
  PRAYER_GRID.innerHTML = "";

  for (const [field, label] of PRAYER_FIELDS) {
    const node = CARD_TEMPLATE.content.firstElementChild.cloneNode(true);
    node.querySelector(".prayer-name").textContent = label;
    node.querySelector(".prayer-time").textContent = formatTime(times[field]);
    PRAYER_GRID.append(node);
  }
}

function formatTime(value) {
  if (!value) return "--:--";
  return new Date(`1970-01-01T${value}`).toLocaleTimeString("en-MY", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDateKey(date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = String(date.getDate()).padStart(2, "0");
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function formatGeneratedAt(value) {
  if (!value) return "recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "recently";
  return date.toLocaleString("en-MY", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
