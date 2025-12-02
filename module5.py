import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

def run_entropy_simulation():

    # Grid size
    N = 40  # 40x40 grid

    # Initialize grid:
    grid = np.zeros((N, N), dtype=int)
    grid[:, N//2:] = 1   # right half = 1, left = 0

    # Entropy function
    def compute_entropy(arr):
        flat = arr.flatten()
        pA = np.mean(flat == 0)
        pB = np.mean(flat == 1)
        entropy = 0
        if pA > 0:
            entropy -= pA * np.log2(pA)
        if pB > 0:
            entropy -= pB * np.log2(pB)
        return entropy

    steps = 400
    entropy_list = []

    #Update function for animation
    def update(frame):
        # uses grid from outer scope
        for _ in range(500):
            i, j = np.random.randint(0, N, 2)
            di = np.random.choice([-1, 0, 1])
            dj = np.random.choice([-1, 0, 1])
            ni, nj = (i + di) % N, (j + dj) % N
            grid[i, j], grid[ni, nj] = grid[ni, nj], grid[i, j]

        S = compute_entropy(grid)
        entropy_list.append(S)

        img.set_data(grid)
        text_entropy.set_text(f"Entropy: {S:.3f}")

        return [img, text_entropy]

    #Plot setup
    fig, ax = plt.subplots(figsize=(6, 6))
    img = ax.imshow(grid, cmap="bwr", vmin=0, vmax=1)
    ax.set_title("Entropy Simulation: Particle Mixing")
    ax.set_xticks([])
    ax.set_yticks([])

    text_entropy = ax.text(0.02, 0.95, "", transform=ax.transAxes,
                           fontsize=12, color="black",
                           bbox=dict(facecolor='white', alpha=0.7))

    ani = animation.FuncAnimation(fig, update, frames=steps, interval=60)

    plt.show()

    #Entropy curve plot after animation
    plt.figure(figsize=(7, 4))
    plt.plot(entropy_list, linewidth=2)
    plt.title("Entropy vs Time")
    plt.xlabel("Steps")
    plt.ylabel("Shannon Entropy (bits)")
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    run_entropy_simulation()
