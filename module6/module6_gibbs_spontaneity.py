def module6():
    print("ΔH / ΔS / ΔG STUDIO")
    print("This tool calculates Gibbs Free Energy using:")
    print("          ΔG = ΔH − TΔS")
    print("Please enter:")
    print("  ΔH in kJ/mol")
    print("  ΔS in J/(mol·K)")
    print("  T  in Kelvin\n")

    # INPUT SECTION 
    dH = float(input("Enter ΔH (kJ/mol): "))
    dS = float(input("Enter ΔS (J/(mol·K)): "))
    T = float(input("Enter Temperature T (K): "))

    #CONVERT UNITS
    # Convert ΔS to kJ/(mol·K) for consistency
    dS_kJ = dS / 1000  

    # CALCULATE ΔG 
    dG = dH - (T * dS_kJ)

    #OUTPUT 
    print("\n RESULTS")
    print(f"ΔH = {dH:.2f} kJ/mol")
    print(f"ΔS = {dS:.2f} J/(mol·K)")
    print(f"T  = {T:.2f} K")
    print(f"ΔG = {dG:.2f} kJ/mol")
    # ---- SPONTANEITY CHECK ----
    if dG < 0:
        print("👉 The process is Spnotaneous at this temperature (ΔG < 0).")
    elif dG > 0:
        print("👉 The process is Non-Spontaneous at this temperature (ΔG > 0).")
    else:
        print("👉 The system is at Equilibrium at this temperature (ΔG = 0).")

    print("\n Quick Temperature Behaviour Guide")
    print("ΔH < 0 and ΔS > 0 → Spontaneous at all temperatures")
    print("ΔH > 0 and ΔS < 0 → Non-spontaneous at all temperatures")
    print("ΔH < 0 and ΔS < 0 → Spontaneous at low temp only")
    print("ΔH > 0 and ΔS > 0 → Spontaneous at High Temp only")

# Debug run
if __name__ == "__main__":
    module6()
