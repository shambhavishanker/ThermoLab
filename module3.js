function calculateWork() {
  let Pext = parseFloat(document.getElementById("p-ext").value);
  let V1   = parseFloat(document.getElementById("v1").value);
  let V2   = parseFloat(document.getElementById("v2").value);

  if (isNaN(Pext) || isNaN(V1) || isNaN(V2)) {
    alert("Please enter valid numbers.");
    return;
  }

  if (V1 <= 0 || V2 <= 0) {
    alert("Volumes must be greater than zero.");
    return;
  }

  if (V1 === V2) {
    document.getElementById("output").innerHTML =
      "No expansion or compression occurred.";
    return;
  }

  // Irreversible work
  let W_irrev = -Pext * (V2 - V1);

  // Reversible work
  let n = 1;
  let R = 0.0821;
  let T = 298;
  let W_rev = -n * R * T * Math.log(V2 / V1);

  document.getElementById("output").innerHTML = `
    <p><strong>Irreversible Work:</strong> ${W_irrev.toFixed(3)} L·atm</p>
    <p><strong>Reversible Work:</strong> ${W_rev.toFixed(3)} L·atm</p>
    <br>
    <p>Initial Volume: ${V1} L</p>
    <p>Final Volume: ${V2} L</p>
    <p>External Pressure: ${Pext} atm</p>
  `;
}
