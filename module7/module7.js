function calculateHess() {
  // Treat blank fields as 0
  const h1 = parseFloat(document.getElementById("step1").value) || 0;
  const h2 = parseFloat(document.getElementById("step2").value) || 0;
  const h3 = parseFloat(document.getElementById("step3").value) || 0;

  const total = h1 + h2 + h3;

  // Show step values
  document.getElementById("step1Result").textContent = `${h1.toFixed(2)} kJ/mol`;
  document.getElementById("step2Result").textContent = `${h2.toFixed(2)} kJ/mol`;
  document.getElementById("step3Result").textContent = `${h3.toFixed(2)} kJ/mol`;

  // Overall ΔH
  const totalBox = document.getElementById("totalBox");
  totalBox.textContent = `${total.toFixed(2)} kJ/mol`;

  let explanation = "";

  if (total < 0) {
    explanation =
      "Overall process is exothermic (ΔH < 0). According to Hess's Law, this total would be the same even if you used a different valid pathway.";
  } else if (total > 0) {
    explanation =
      "Overall process is endothermic (ΔH > 0). Hess's Law says any alternative sequence of steps giving the same reaction will have the same total ΔH.";
  } else {
    explanation =
      "Overall ΔH = 0 kJ/mol. The net enthalpy change for this pathway is zero.";
  }

  document.getElementById("explainText").textContent = explanation;
}
