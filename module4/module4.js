function calculateHeat() {
  const substance = document.getElementById("substance").value.trim();
  const mass = parseFloat(document.getElementById("mass").value);
  const c = parseFloat(document.getElementById("c").value);
  const t1 = parseFloat(document.getElementById("t1").value);
  const t2 = parseFloat(document.getElementById("t2").value);

  if (isNaN(mass) || isNaN(c) || isNaN(t1) || isNaN(t2)) {
    alert("Please fill in all numerical fields (mass, C, T₁, T₂).");
    return;
  }

  const deltaT = t2 - t1;
  const q = mass * c * deltaT; // q = m · C · ΔT

  const resultsDiv = document.getElementById("results");
  const summaryP = document.getElementById("summary");

  let namePart = substance ? `${substance}: ` : "";

  summaryP.textContent = `${namePart}Temperature changes from ${t1.toFixed(
    1
  )} °C to ${t2.toFixed(1)} °C.`;

  let processText = "";
  if (deltaT > 0) {
    processText = "This is a heating process (heat is absorbed).";
  } else if (deltaT < 0) {
    processText = "This is a cooling process (heat is released).";
  } else {
    processText = "No temperature change (ΔT = 0).";
  }

  resultsDiv.innerHTML = `
    <p><strong>ΔT:</strong> ${deltaT.toFixed(2)} °C</p>
    <p><strong>Heat required q:</strong> ${q.toFixed(2)} J</p>
    <p>${processText}</p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calcBtn");
  btn.addEventListener("click", calculateHeat);
});
