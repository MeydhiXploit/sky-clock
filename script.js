const supportersData = [
  { name: "?", tier: "gold", ig: "", tiktok: "", youtube: "" },
  { name: "?", tier: "silver", ig: "", tiktok: "" },
  { name: "Tirta", tier: "bronze", ig: "its.skyturtle" },
  { name: "Vior", tier: "bronze", ig: "keerusell" },
  { name: "Minh", tier: "bronze", ig: "p.mihn_003" },
  { name: "Zahrah", tier: "bronze", ig: "skylar.ra_" },
  
];

function renderSupporters() {
  const goldContainer = document.getElementById("gold-container");
  const silverContainer = document.getElementById("silver-container");
  const bronzeContainer = document.getElementById("bronze-container");

  goldContainer.innerHTML =
    '<div class="tier-label" style="color:#d4af37">Gold Guardians</div>';
  silverContainer.innerHTML =
    '<div class="tier-label" style="color:#7a7a7a">Silver Supporters</div>';
  bronzeContainer.innerHTML =
    '<div class="tier-label" style="color:#a05822">Bronze Supporters</div>';

  const iconIG = `<svg class="icon-svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`;
  const iconTikTok = `<svg class="icon-svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>`;
  const iconYT = `<svg class="icon-svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 42.195 48.284 48.597 42.691 11.586 213.371 11.586 213.371 11.586s170.78 0 213.371-11.586c23.497-6.402 42.003-24.947 48.284-48.597 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>`;

  supportersData.forEach((person) => {
    let socialHTML = "";
    let medalClass = "",
      cardClass = "",
      medalIcon = "";

    if (person.tier === "gold") {
      medalClass = "gold-medal";
      cardClass = "gold-card";
      medalIcon = "G";
      if (person.ig)
        socialHTML += `<a href="https://instagram.com/${person.ig}" target="_blank" class="social-btn">${iconIG} IG</a>`;
      if (person.tiktok)
        socialHTML += `<a href="https://tiktok.com/@${person.tiktok}" target="_blank" class="social-btn">${iconTikTok} TT</a>`;
      if (person.youtube)
        socialHTML += `<a href="https://youtube.com/@${person.youtube}" target="_blank" class="social-btn">${iconYT} YT</a>`;
    } else if (person.tier === "silver") {
      medalClass = "silver-medal";
      cardClass = "silver-card";
      medalIcon = "S";
      if (person.ig)
        socialHTML += `<a href="https://instagram.com/${person.ig}" target="_blank" class="social-btn">${iconIG} IG</a>`;
      if (person.tiktok)
        socialHTML += `<a href="https://tiktok.com/@${person.tiktok}" target="_blank" class="social-btn">${iconTikTok} TT</a>`;
    } else {
      medalClass = "bronze-medal";
      cardClass = "bronze-card";
      medalIcon = "B";
      if (person.ig)
        socialHTML += `<a href="https://instagram.com/${person.ig}" target="_blank" class="social-btn">${iconIG} IG</a>`;
    }

    const cardHTML = `
          <div class="supporter-card ${cardClass}">
              <div class="medal ${medalClass}">${medalIcon}</div>
              <div class="supporter-details">
                  <span class="supporter-name">${person.name}</span>
                  <div class="social-links">${socialHTML}</div>
              </div>
          </div>
      `;
    if (person.tier === "gold") goldContainer.innerHTML += cardHTML;
    else if (person.tier === "silver") silverContainer.innerHTML += cardHTML;
    else bronzeContainer.innerHTML += cardHTML;
  });
}
renderSupporters();

// ==========================================
// 3. CLOCK LOGIC (Local & Sky Time)
// ==========================================
function getSkyServerTime() {
  const now = new Date();
  const options = {
    timeZone: "America/Los_Angeles",
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(now);
  const getPart = (type) => parts.find((p) => p.type === type).value;
  return new Date(
    getPart("year"),
    getPart("month") - 1,
    getPart("day"),
    getPart("hour"),
    getPart("minute"),
    getPart("second")
  );
}

function updateClock() {
  // A. SERVER TIME
  const serverTime = getSkyServerTime();
  const sHours = String(serverTime.getHours()).padStart(2, "0");
  const sMinutes = String(serverTime.getMinutes()).padStart(2, "0");
  const sSeconds = String(serverTime.getSeconds()).padStart(2, "0");
  document.getElementById(
    "server-clock"
  ).innerText = `${sHours}:${sMinutes}:${sSeconds}`;

  // B. LOCAL TIME
  const now = new Date();
  const lHours = String(now.getHours()).padStart(2, "0");
  const lMinutes = String(now.getMinutes()).padStart(2, "0");
  const lSeconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "local-clock"
  ).innerText = `${lHours}:${lMinutes}:${lSeconds}`;

  // C. RESET TIMERS
  updateResetTimers(serverTime);

  // D. EVENT LOGIC
  const isEvenHour = serverTime.getHours() % 2 === 0;
  let cycleMinute = serverTime.getMinutes() + (isEvenHour ? 0 : 60);
  const seconds = serverTime.getSeconds();

  updateEventCard("geyser", cycleMinute, seconds, 5, 15);
  updateEventCard("grandma", cycleMinute, seconds, 35, 45);
  updateEventCard("turtle", cycleMinute, seconds, 50, 60);
}

function updateResetTimers(serverTime) {
  const secondsInDay = 24 * 60 * 60;
  const currentSeconds =
    serverTime.getHours() * 3600 +
    serverTime.getMinutes() * 60 +
    serverTime.getSeconds();
  const secondsToDaily = secondsInDay - currentSeconds;
  document.getElementById("daily-timer").innerText =
    formatSeconds(secondsToDaily);

  const currentDay = serverTime.getDay();
  let fullDays = 7 - currentDay;
  if (fullDays === 7 && currentSeconds > 0) fullDays = 6;
  else if (fullDays === 7 && currentSeconds === 0) fullDays = 0;
  else fullDays = fullDays - 1;

  if (fullDays < 0) fullDays = 6;

  let totalEdenSeconds = secondsToDaily + fullDays * 86400;
  let edenText = formatSeconds(totalEdenSeconds);
  if (totalEdenSeconds >= 86400) {
    const d = Math.floor(totalEdenSeconds / 86400);
    const h = Math.floor((totalEdenSeconds % 86400) / 3600);
    const m = Math.floor((totalEdenSeconds % 3600) / 60);
    edenText = `${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(
      2,
      "0"
    )}m`;
  }
  document.getElementById("weekly-timer").innerText = edenText;
}

function formatSeconds(sec) {
  let h = Math.floor(sec / 3600);
  let m = Math.floor((sec % 3600) / 60);
  let s = Math.floor(sec % 60);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(
    s
  ).padStart(2, "0")}`;
}

function updateEventCard(id, currentMin, currentSec, startMin, endMin) {
  const card = document.getElementById(`card-${id}`);
  const timeDisplay = document.getElementById(`time-${id}`);
  const badge = document.getElementById(`badge-${id}`);
  let status = "",
    remainingSeconds = 0;

  if (currentMin >= startMin && currentMin < endMin) {
    status = "ACTIVE";
    remainingSeconds = (endMin - currentMin) * 60 - currentSec;
  } else if (currentMin < startMin) {
    status = "SOON";
    remainingSeconds = (startMin - currentMin) * 60 - currentSec;
  } else {
    status = "WAITING";
    remainingSeconds = (120 - currentMin + startMin) * 60 - currentSec;
  }

  const m = Math.floor(remainingSeconds / 60);
  const s = remainingSeconds % 60;
  timeDisplay.innerText = `${String(m).padStart(2, "0")}:${String(s).padStart(
    2,
    "0"
  )}`;

  card.classList.remove("active", "soon");
  if (status === "ACTIVE") {
    card.classList.add("active");
    badge.innerText = "ACTIVE NOW";
    badge.style.color = "black";
  } else if (status === "SOON" && m < 10) {
    card.classList.add("soon");
    badge.innerText = "PREPARE";
    badge.style.color = "white";
  } else {
    badge.innerText = "NEXT UP";
    badge.style.color = "rgba(255,255,255,0.7)";
  }
}
setInterval(updateClock, 1000);
updateClock();
