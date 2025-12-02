// page switching
const navButtons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.page;

    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach((p) => {
      p.classList.toggle("show", p.id === target);
    });
  });
});

// dashboard card opens module
const gibbsCard = document.querySelector("[data-open='gibbs']");
if (gibbsCard) {
  gibbsCard.addEventListener("click", () => {
    document.querySelector(".nav-btn[data-page='gibbs']").click();
  });
}

// ΔG calculation
const form = document.getElementById("gibbs-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dH = parseFloat(document.getElementById("input-dH").value);
    const dS = parseFloat(document.getElementById("input-dS").value);
    const T = parseFloat(document.getElementById("input-T").value);

    if ([dH, dS, T].some(isNaN)) {
      alert("Please fill all the values.");
      return;
    }

    const dS_kJ = dS / 1000; // J → kJ
    const dG = dH - T * dS_kJ;

    const out = document.getElementById("gibbs-output");
    out.innerHTML = `
      <p>ΔH = ${dH.toFixed(2)} kJ/mol</p>
      <p>ΔS = ${dS.toFixed(2)} J/(mol·K)</p>
      <p>T  = ${T.toFixed(2)} K</p>
      <p><strong>ΔG = ${dG.toFixed(2)} kJ/mol</strong></p>
    `;

    const interp = document.getElementById("gibbs-interpretation");
    let text = "";
    let cls = "result ";

    if (dG < 0) {
      text = "The process is spontaneous at this temperature (ΔG < 0).";
      cls += "good";
    } else if (dG > 0) {
      text = "The process is non-spontaneous at this temperature (ΔG > 0).";
      cls += "bad";
    } else {
      text = "The system is at equilibrium at this temperature (ΔG = 0).";
      cls += "neutral";
    }

    interp.className = cls;
    interp.textContent = text;
  });
}
