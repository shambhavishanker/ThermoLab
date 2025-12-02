def run_heat_capacity_simulator():
    print("\n  HEAT CAPACITY & HEATING SIMULATOR")

    substance = input("Enter substance name (e.g., water): ")

    mass = float(input("Enter mass (in grams): "))
    c = float(input("Enter specific heat capacity C (J/g·K): "))
    t1 = float(input("Enter initial temperature T1 (°C): "))
    t2 = float(input("Enter final temperature T2 (°C): "))

    delta_t = t2 - t1
    q = mass * c * delta_t   # formula

    print("\n RESULTS")
    print("Substance:", substance)
    print("Temperature change ΔT =", delta_t, "°C")
    print("Heat required q =", q, "J")

    if delta_t > 0:
        print("This is a heating process (heat is absorbed).")
    elif delta_t < 0:
        print("This is a cooling process (heat ia released).")
    else:
        print("No temperature change.")
        
# Debug run
if __name__ == "__main__":
    run_heat_capacity_simulator()
