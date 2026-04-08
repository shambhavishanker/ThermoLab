// Simple entropy simulation: particles A (0) and B (1) mix over time.

let grid = [];
let N = 10;
let totalSteps = 0;
let currentStep = 0;
let timer = null;

const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

function initGrid(size) {
  N = size;
  grid = [];

  for (let r = 0; r < N; r++) {
    const row = [];
    for (let c = 0; c < N; c++) {
      // left half = A (0), right half = B (1)
      row.push(c < N / 2 ? 0 : 1);
    }
    grid.push(row);
  }
}

function drawGrid() {
  const cellSize = canvas.width / N;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const value = grid[r][c];
      ctx.fillStyle = value === 0 ? "#0ea5e9" : "#f97316";
      ctx.fillRect(
        c * cellSize + 1,
        r * cellSize + 1,
        cellSize - 2,
        cellSize - 2
      );
    }
  }
}

// do a few random swaps per step to show motion
function stepMixing() {
  for (let k = 0; k < N; k++) {
    const r1 = Math.floor(Math.random() * N);
    const c1 = Math.floor(Math.random() * N);
    const r2 = Math.floor(Math.random() * N);
    const c2 = Math.floor(Math.random() * N);

    const temp = grid[r1][c1];
    grid[r1][c1] = grid[r2][c2];
    grid[r2][c2] = temp;
  }
}

// simple "entropy" = fraction of cells that have at least one neighbour of opposite type
function computeEntropy() {
  let mixed = 0;
  const total = N * N;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const v = grid[r][c];
      let hasDifferent = false;

      if (r > 0 && grid[r - 1][c] !== v) hasDifferent = true;
      if (r < N - 1 && grid[r + 1][c] !== v) hasDifferent = true;
      if (c > 0 && grid[r][c - 1] !== v) hasDifferent = true;
      if (c < N - 1 && grid[r][c + 1] !== v) hasDifferent = true;

      if (hasDifferent) mixed++;
    }
  }

  return mixed / total; // between 0 and 1
}

function updateUI() {
  const entropy = computeEntropy();
  const entropyPercent = (entropy * 100).toFixed(2);

  document.getElementById("entropyValue").textContent =
    entropyPercent + " %";

  document.getElementById("stepLabel").textContent =
    currentStep + " / " + totalSteps;

  const bar = document.getElementById("mixBar");
  bar.style.width = entropyPercent + "%";
}

function runSimulation() {
  const stepsInput = document.getElementById("stepsInput");
  const gridSelect = document.getElementById("gridSize");

  totalSteps = parseInt(stepsInput.value, 10) || 200;
  const size = parseInt(gridSelect.value, 10) || 10;

  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  initGrid(size);
  drawGrid();

  currentStep = 0;
  updateUI();

  // animate
  timer = setInterval(function () {
    currentStep++;
    stepMixing();
    drawGrid();
    updateUI();

    if (currentStep >= totalSteps) {
      clearInterval(timer);
      timer = null;
    }
  }, 40); // 25 frames/sec approx
}

// hook up button
document.getElementById("runBtn").addEventListener("click", runSimulation);

// initial state
initGrid(10);
drawGrid();
updateUI();
