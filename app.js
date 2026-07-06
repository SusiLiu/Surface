
/* ===== DATA ===== */

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
  Science:{q:"Reality under structure",career:"Science / Engineering",history:"From Aristotle to physics",cost:"High",study:"Bio / Chem / Physics"},
  Arts:{q:"Meaning through form",career:"Design / Media",history:"Cave art → modern",cost:"Medium",study:"Drawing / Design"},
  Philosophy:{q:"What is existence?",career:"Academia / Writing",history:"Ancient → modern thought",cost:"High abstraction",study:"Logic / Ethics"},
  Humanities:{q:"How humans build society",career:"IR / Law / Policy",history:"Civilization studies",cost:"Medium",study:"History / Sociology"}
};

/* ===== START ===== */

function start(){
  document.getElementById("start").style.display="none";
  document.getElementById("app").classList.remove("hidden");

  const q=["What is truth?","What is knowledge?","Can systems think?"];
  document.getElementById("question").innerText =
    q[Math.floor(Math.random()*q.length)];
}

/* ===== BACKDROP ===== */

function setBackdrop(type){
  let old=document.querySelector(".backdrop");
  if(old) old.remove();

  let d=document.createElement("div");
  d.className="backdrop "+type;
  document.body.appendChild(d);
}

/* ===== HOVER (V3 VISUAL CHANGE) ===== */

function hoverSystem(type){
  setBackdrop(type);

  document.getElementById("view").innerHTML=`
    <div style="padding:60px;">
      <h1 style="transform:rotate(-2deg)">
        ${type.toUpperCase()} WORLD
      </h1>
      <p>Entering collage environment...</p>
    </div>
  `;
}

/* ===== OPEN SYSTEM ===== */

function openSystem(type){
  setBackdrop(type);

  const data = type==="academic"?academic:life;

  let html=`<div class="grid">`;

  data.forEach(i=>{
    html+=`<div class="card" onclick="openSubject('${i.name}')">${i.name}</div>`;
  });

  html+=`</div>`;

  document.getElementById("view").innerHTML=html;
}

/* ===== SUBJECT ===== */

function openSubject(name){
  const s=subjects[name]||{q:"-",career:"-",history:"-",cost:"-",study:"-"};

  document.getElementById("view").innerHTML=`
    <div class="subject">
      <h1>${name}</h1>
      <p>${s.q}</p>
      <p>${s.career}</p>
      <p>${s.history}</p>
      <p>${s.cost}</p>
      <p>${s.study}</p>
    </div>
  `;
}
