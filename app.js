
const academic=[
  {name:"Science"},
  {name:"Arts"},
  {name:"Humanities"},
  {name:"Philosophy"}
];

const life=[
  {name:"Life"},
  {name:"Games"},
  {name:"Sports"},
  {name:"Internet"}
];

const subjects={
  Science:{q:"How reality behaves",career:"Science / Engineering",history:"From Aristotle to physics",cost:"High abstraction",study:"Bio / Chem / Physics"},
  Arts:{q:"How meaning is created visually",career:"Design / Media",history:"Cave art → magazines",cost:"Practice",study:"Drawing / Composition"},
  Philosophy:{q:"What exists?",career:"Writing / Academia",history:"Ancient → modern thought",cost:"High thinking load",study:"Logic / Ethics"},
  Humanities:{q:"How humans construct society",career:"Law / IR",history:"Civilization layers",cost:"Medium",study:"History / Sociology"}
};

function start(){
  document.getElementById("start").style.display="none";
  document.getElementById("app").classList.remove("hidden");

  const q=[
    "What is knowledge?",
    "What is truth?",
    "Why does meaning exist?"
  ];

  document.getElementById("question").innerText=
    q[Math.floor(Math.random()*q.length)];
}

/* ===== SYSTEM OPEN ===== */

function openSystem(type){

  const data = type==="academic"?academic:life;

  let html="";

  data.forEach((i,idx)=>{
    html+=`
      <div class="card" onclick="openSubject('${i.name}')">
        <div>${i.name}</div>
        <small>enter</small>
      </div>
    `;
  });

  document.getElementById("view").innerHTML=html;
}

/* ===== SUBJECT ===== */

function openSubject(name){

  const s=subjects[name]||{q:"-",career:"-",history:"-",cost:"-",study:"-"};

  document.getElementById("view").innerHTML=`
    <div class="subject">
      <h1>${name}</h1>
      <p><b>Question:</b> ${s.q}</p>
      <p><b>Career:</b> ${s.career}</p>
      <p><b>History:</b> ${s.history}</p>
      <p><b>Cost:</b> ${s.cost}</p>
      <p><b>Study:</b> ${s.study}</p>
    </div>
  `;
}
