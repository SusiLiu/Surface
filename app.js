/* =========================
   Surface V2.5 CLEAN FINAL
   (No external dependencies)
========================= */

/* ===== DATA ===== */

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
    question: "How does reality behave?",
    career: "Science / Medicine / Engineering",
    history: "From early philosophy to modern physics",
    cost: "Medium–High effort",
    study: "Biology, Chemistry, Physics"
  },
  Arts: {
    question: "How is meaning visually expressed?",
    career: "Design / Media / Fashion",
    history: "From cave art to digital aesthetics",
    cost: "Practice-based learning",
    study: "Drawing, Composition, Design"
  },
  Philosophy: {
    question: "What is existence?",
    career: "Academia / Writing / Policy",
    history: "Ancient Greece to modern theory",
    cost: "High abstraction",
    study: "Logic, Ethics, Metaphysics"
  },
  Humanities: {
    question: "How do humans build meaning in society?",
    career: "Law / IR / Education",
    history: "Civilization to modern society",
    cost: "Moderate reading load",
    study: "History, Sociology, Politics"
  }
};

/* ===== START ===== */

function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  const questions = [
    "What is knowledge?",
    "What defines truth?",
    "Can systems think?",
    "What is reality made of?"
  ];

  document.getElementById("question").innerText =
    questions[Math.floor(Math.random() * questions.length)];
}

/* ===== BACKDROP ===== */

function setBackdrop(type) {
  let old = document.querySelector(".backdrop");
  if (old) old.remove();

  let div = document.createElement("div");
  div.className = "backdrop " + type;
  document.body.appendChild(div);
}

/* ===== SYSTEM OPEN ===== */

function openSystem(type) {
  setBackdrop(type);

  const view = document.getElementById("view");
  const data = type === "academic" ? academic : life;

  let html = `<div class="grid">`;

  data.forEach(item => {
    html += `
      <div class="card" onclick="openSubject('${item.name}')">
        ${item.name}
      </div>
    `;
  });

  html += `</div>`;
  view.innerHTML = html;
}

/* ===== HOVER PREVIEW ===== */

function hoverSystem(type) {
  setBackdrop(type);

  const view = document.getElementById("view");

  if (type === "academic") {
    view.innerHTML = `
      <div style="padding:60px;">
        <h2>Academic System</h2>
        <p>Science • Arts • Humanities • Philosophy</p>
      </div>
    `;
  }

  if (type === "life") {
    view.innerHTML = `
      <div style="padding:60px;">
        <h2>Life System</h2>
        <p>Games • Sports • Internet • Daily Skills</p>
      </div>
    `;
  }
}

/* ===== OPEN SUBJECT ===== */

function openSubject(name) {
  const view = document.getElementById("view");
  const s = subjects[name] || {
    question: "No data yet",
    career: "TBD",
    history: "TBD",
    cost: "TBD",
    study: "TBD"
  };

  const saved = localStorage.getItem(name) || "";

  view.innerHTML = `
    <div class="subject">
      <h1>${name}</h1>

      <p><b>Question:</b> ${s.question}</p>
      <p><b>Career:</b> ${s.career}</p>
      <p><b>History:</b> ${s.history}</p>
      <p><b>Cost:</b> ${s.cost}</p>
      <p><b>Study:</b> ${s.study}</p>

      <h3>Notes</h3>
      <textarea id="note">${saved}</textarea>

      <button onclick="saveNote('${name}')">Save</button>
    </div>
  `;
}

/* ===== SAVE NOTES ===== */

function saveNote(name) {
  const value = document.getElementById("note").value;
  localStorage.setItem(name, value);
}
