function calculateHeat() {

    let m = parseFloat(document.getElementById("mass").value);
    let c = parseFloat(document.getElementById("shc").value);
    let Ti = parseFloat(document.getElementById("tInitial").value);
    let Tf = parseFloat(document.getElementById("tFinal").value);

    let dT = Tf - Ti;
    let Q = m * c * dT;

    // Update UI
    document.getElementById("Qvalue").innerHTML = Q.toFixed(2) + " J";
    document.getElementById("deltaT").innerHTML = dT.toFixed(2) + " °C";

    document.getElementById("TiLabel").innerHTML = Ti + "°C";
    document.getElementById("TfLabel").innerHTML = Tf + "°C";

    // Process Type
    let tag = document.getElementById("processTag");
    let exp = document.getElementById("explanation");
    let label = document.getElementById("processLabel");

    if (Q > 0) {
        tag.innerHTML = "Heating";
        tag.style.color = "#d62839";
        label.innerHTML = "Energy absorbed";
        exp.innerHTML = "Positive Q means heat is absorbed (endothermic). The substance temperature increases.";
    }
    else {
        tag.innerHTML = "Cooling";
        tag.style.color = "#2563eb";
        label.innerHTML = "Energy released";
        exp.innerHTML = "Negative Q means heat is released (exothermic). The substance cools down.";
    }
}