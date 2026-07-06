
/* =========================
   DATA CORE
========================= */

const academic = [
  { name: "Science" },
  { name: "Arts" },
  { name: "Humanities" },
  { name: "Philosophy" }
];

const life = [
  { name: "Life" },
  { name: "Games" },
  { name: "Sports" },
  { name: "Internet" }
];

const subjects = {
  Science: {
    q: "How does reality behave?",
    career: "Science / Engineering / Medicine",
    history: "From philosophy to physics",
    cost: "High learning curve",
    study: "Bio / Chem / Physics"
  },
  Arts: {
    q: "How do we create meaning visually?",
    career: "Design / Media / Fashion",
    history: "Cave art → digital art",
    cost: "Practice-heavy",
    study: "Drawing / Design / Theory"
  },
  Philosophy: {
    q: "What is existence?",
    career: "Academia / Writing / Policy",
    history: "Ancient → modern theory",
    cost: "Abstract thinking",
    study: "Logic / Ethics"
  }
};

/* =========================
   START
========================= */

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  const q = [
    "What is knowledge?",
    "What is reality?",
    "Can systems think?",
    "What is truth?"
  ];

  document.getElementById("question").innerText =
    q[Math.floor(Math.random() * q.length)];
}

/* =========================
   BACKDROP SYSTEM
========================= */

function setBackdrop(type) {
  let old = document.querySelector(".backdrop");
  if (old) old.remove();

  let div = document.createElement("div");
  div.className = "backdrop " + type;
  document.body.appendChild(div);
}

/* =========================
   HOVER (DESK PREVIEW)
========================= */

function hoverSystem(type) {
  setBackdrop(type);

  document.getElementById("view").innerHTML = `
    <div style="padding:60px;">
      <h2>${type.toUpperCase()}</h2>
      <p>Entering a visual knowledge space...</p>
    </div>
  `;
}

/* =========================
   OPEN SYSTEM
========================= */

function openSystem(type) {
  setBackdrop(type);

  const data = type === "academic" ? academic : life;

  let html = `<div class="grid">`;

  data.forEach(i => {
    html += `<div class="card" onclick="openSubject('${i.name}')">${i.name}</div>`;
  });

  html += `</div>`;

  document.getElementById("view").innerHTML = html;
}

/* =========================
   SUBJECT PAGE
========================= */

function openSubject(name) {
  const s = subjects[name] || {
    q: "No data",
    career: "TBD",
    history: "TBD",
    cost: "TBD",
    study: "TBD"
  };

  document.getElementById("view").innerHTML = `
    <div class="subject">
      <h1>${name}</h1>
      <p><b>Question:</b> ${s.q}</p>
      <p><b>Career:</b> ${s.career}</p>
      <p><b>History:</b> ${s.history}</p>
      <p><b>Cost:</b> ${s.cost}</p>
      <p><b>Study:</b> ${s.study}</p>

      <h3>Notes</h3>
      <textarea id="note" style="width:100%;height:180px;"></textarea>
      <button onclick="saveNote('${name}')">Save</button>
    </div>
  `;
}

/* =========================
   LOCAL STORAGE
========================= */

function saveNote(name) {
  const v = document.getElementById("note").value;
  localStorage.setItem(name, v);
}
