// van der Waals constants
const gasData = {
    "N2": { a: 1.39, b: 0.0391 },
    "CO2": { a: 3.59, b: 0.0427 },
    "CH4": { a: 2.25, b: 0.0428 }
};

let chart; // chart instance

function generatePlot() {

    let gas = document.getElementById("gasSelect").value;
    let T = parseFloat(document.getElementById("tempInput").value);

    let a = gasData[gas].a;
    let b = gasData[gas].b;

    // Update constants on screen
    document.getElementById("aValue").innerHTML = a + " L²·atm/mol²";
    document.getElementById("bValue").innerHTML = b + " L/mol";

    const R = 0.0821;

    let pressures = [];
    let idealZ = [];
    let realZ = [];

    for (let P = 1; P <= 100; P += 5) {

        pressures.push(P);

        // Ideal Z = 1 always
        idealZ.push(1);

        // Real gas Z using van der Waals equation (n=1, V approx = RT/P)
        let V = (R * T) / P;
        let Z = (P * V) / (R * T) + (P * b - a / (V * V)) / (R * T);

        realZ.push(Z);
    }

    // Draw chart
    if (chart) chart.destroy();

    let ctx = document.getElementById("zChart").getContext("2d");

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: pressures,
            datasets: [
                {
                    label: "Ideal Gas",
                    data: idealZ,
                    borderColor: "#94a3b8",
                    borderWidth: 2,
                    fill: false
                },
                {
                    label: "Real Gas",
                    data: realZ,
                    borderColor: "#7c3aed",
                    borderWidth: 2,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: false }
            }
        }
    });
}