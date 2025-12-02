function classifySystem() {

    let system = document.getElementById("systemType").value;
    let wall = document.getElementById("wallType").value;

    let heat = "";
    let work = "Allowed";
    let matter = "";

    // Heat transfer depends on wall type
    heat = wall.includes("Diathermic") ? "Allowed" : "Blocked";

    // Matter transfer depends on system type
    if (system.includes("Open")) matter = "Allowed";
    else matter = "Blocked";

    // Work is allowed except for isolated
    if (system.includes("Isolated")) {
        heat = "Blocked";
        work = "Blocked";
        matter = "Blocked";
    }

    document.getElementById("heatResult").innerHTML = heat;
    document.getElementById("workResult").innerHTML = work;
    document.getElementById("matterResult").innerHTML = matter;

    document.getElementById("heatResult").className = `status ${heat.toLowerCase()}`;
    document.getElementById("workResult").className = `status ${work.toLowerCase()}`;
    document.getElementById("matterResult").className = `status ${matter.toLowerCase()}`;

    document.getElementById("finalLabel").innerHTML = system;

    let explanation = "";

    if (system.includes("Open")) {
        explanation = "An open system exchanges both matter and energy. Heat transfer depends on wall type.";
    } else if (system.includes("Closed")) {
        explanation = "A closed system exchanges energy only (no matter). Heat depends on the wall type.";
    } else {
        explanation = "An isolated system exchanges no heat, no work, and no matter.";
    }

    document.getElementById("explainText").innerHTML = explanation;
}