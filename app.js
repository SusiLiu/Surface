const academic = [
  {name:"Science"},
  {name:"Arts"},
  {name:"Humanities"},
  {name:"Philosophy"}
];

const life = [
  {name:"Life"},
  {name:"Games"},
  {name:"Sports"},
  {name:"Internet"}
];

const subjects = {
  "Science": {
    question: "How does reality behave?",
    career: "Science / Medicine / Engineering",
    history: "From Aristotle to modern physics",
    cost: "Medium to high effort",
    study: "Biology, Chemistry, Physics"
  },

  "Philosophy": {
    question: "What is existence?",
    career: "Academia / Writing / Policy",
    history: "Ancient Greece to modern thought",
    cost: "High abstraction cost",
    study: "Ethics, Logic, Metaphysics"
  },

  "Arts": {
    question: "How do we represent meaning?",
    career: "Design / Fashion / Media",
    history: "From cave painting to modern art",
    cost: "Medium creative input",
    study: "Drawing, Composition, Theory"
  }
};

/* START */
function start(){
  document.getElementById("start").style.display="none";
  document.getElementById("app").classList.remove("hidden");

  const q = [
    "What is truth?",
    "What is reality made of?",
    "Why do we think?"
  ];

  document.getElementById("question").innerText =
    q[Math.floor(Math.random()*q.length)];
}

/* SYSTEM OPEN */
function openSystem(type){
  const view = document.getElementById("view");

  const data = (type==="academic") ? academic : life;

  let html = `<div class="grid">`;

  data.forEach(item=>{
    html += `<div class="card" onclick="openSubject('${item.name}')">${item.name}</div>`;
  });

  html += `</div>`;
  view.innerHTML = html;
}

/* HOVER EFFECT (V2 CORE) */
function hoverSystem(type){
  const view = document.getElementById("view");

  if(type === "academic"){
    view.innerHTML = `<div style="padding:40px;">Academic System Preview</div>`;
  } else {
    view.innerHTML = `<div style="padding:40px;">Life System Preview</div>`;
  }
}

/* SUBJECT PAGE */
function openSubject(name){
  const s = subjects[name] || {
    question:"No data yet",
    career:"TBD",
    history:"TBD",
    cost:"TBD",
    study:"TBD"
  };

  document.getElementById("view").innerHTML = `
    <div class="subject">
      <h1>${name}</h1>

      <p>${s.question}</p>
      <p>${s.career}</p>
      <p>${s.history}</p>
      <p>${s.cost}</p>
      <p>${s.study}</p>

      <h3>Notes</h3>
      <textarea id="note"></textarea>

      <button onclick="save('${name}')">Save</button>
    </div>
  `;
}

/* SAVE */
function save(name){
  localStorage.setItem(name, document.getElementById("note").value);
}
