function calculateDG() {
  let dH = parseFloat(document.getElementById("input-dH").value);
  let dS = parseFloat(document.getElementById("input-dS").value);
  let T  = parseFloat(document.getElementById("input-T").value);

  if (isNaN(dH) || isNaN(dS) || isNaN(T)) {
    alert("Please enter valid numbers.");
    return;
  }

  let dS_kJ = dS / 1000;
  let dG = dH - T * dS_kJ;

  document.getElementById("gibbs-output").innerHTML =
    `<strong>ΔG = ${dG.toFixed(2)} kJ/mol</strong>`;

  let box = document.getElementById("gibbs-interpretation");

  if (dG < 0) {
    box.innerHTML = "Process is spontaneous (ΔG < 0).";
  } else if (dG > 0) {
    box.innerHTML = "Process is non-spontaneous (ΔG > 0).";
  } else {
    box.innerHTML = "System is at equilibrium (ΔG = 0).";
  }
}
