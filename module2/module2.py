import numpy as np
import matplotlib.pyplot as plt

R = 0.08314  # Gas constant in L·bar·K^-1·mol^-1

# Get van der Waals constants 'a' and 'b' from critical temperature (Tc) and critical pressure (Pc)
def vdw_a_b_from_Tc_Pc(Tc, Pc):
    # Formulas from van der Waals theory:
    #   a = 27R²Tc² / 64Pc
    #   b = RTc / 8Pc
    a = 27 * (R**2) * (Tc**2) / (64 * Pc)
    b = (R * Tc) / (8 * Pc)
    return a, b
def solve_vdw_volume(P, T, a, b):
    # Cubic: P V³ - (Pb + RT)V² + aV - ab = 0
    A = P
    B = -(P*b + R*T)
    C = a
    D = -a*b

    roots = np.roots([A, B, C, D])
    # keep only real, positive roots (valid molar volumes)
    real_pos = [r.real for r in roots if abs(r.imag) < 1e-6 and r.real > 0]

    return max(real_pos) if real_pos else None

def run_ideal_real_mapper():
    print("Ideal vs Real Gas Comparison\n")
    print("This module compares the compressibility factor Z = PV / (RT)")
    print("for: (i) Ideal gas and (ii) Real gas using the Van der Waals equation.\n")

    gases = {
        "1": ("Nitrogen (N₂)", 126.2, 33.5),     
        "2": ("Carbon dioxide (CO₂)", 304.2, 73.8),
        "3": ("Methane (CH₄)", 190.6, 45.9),
        "4": ("Custom gas (enter your own a & b)", None, None),
    }

    print("Choose a gas:")
    for key, (name, Tc, Pc) in gases.items():
        if Tc:
            print(f"{key}) {name}  (Critical Temperature Tc = {Tc} K, Critical Pressure Pc = {Pc} bar)")
        else:
            print(f"{key}) {name}")

    choice = input("\nEnter your choice (1–4): ").strip()

    if choice in ["1", "2", "3"]:
        name, Tc, Pc = gases[choice]
        a, b = vdw_a_b_from_Tc_Pc(Tc, Pc)
        print(f"\nSelected Gas: {name}")
        print(f"Calculated van der Waals constants:")
        print(f" - a (measure of attraction)     = {a:.3f} L²·bar/mol²")
        print(f" - b (excluded volume per mole)  = {b:.4f} L/mol")
    else:
        name = "Custom gas"
        print("\nEnter your own van der Waals constants:")
        a = float(input("Enter 'a' (L²·bar/mol²): "))
        b = float(input("Enter 'b' (L/mol): "))

    T = float(input("\nEnter Temperature T (in Kelvin): "))

    # Pressure range (1 to 100 bar)
    P_vals = np.linspace(1, 100, 50)

    # Ideal gas → Z = 1 always
    Z_ideal = np.ones_like(P_vals)

    # Real gas Z (from van der Waals)
    Z_real = []
    for P in P_vals:
        V = solve_vdw_volume(P, T, a, b)  # molar volume
        Z_real.append(P * V / (R * T) if V else np.nan)

    # Plot
    plt.plot(P_vals, Z_ideal, label="Ideal Gas (Z = 1)")
    plt.plot(P_vals, Z_real, label=f"Real Gas ({name})", linestyle="--", marker="o")
    plt.xlabel("Pressure P (bar)")
    plt.ylabel("Compressibility Factor Z")
    plt.title(
        f"Comparison of Ideal vs Real Gas Behavior\n"
        f"Temperature T = {T} K | Gas: {name}"
    )
    plt.grid(True)
    plt.legend()
    plt.show()

if __name__ == "__main__":
    run_ideal_real_mapper()
