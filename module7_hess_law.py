def module7():
    print("        HESS'S LAW        ")
    print("1. Build One Pathway")
    print("2. Build Two Pathways and Compare")
    choice = input("Enter 1 or 2: ")

    if choice == "1":
        total = build_path("Pathway")
        print("\nOverall ΔH =", total, "kJ/mol")
        print("According to Hess's Law, any other valid path")
        print("for the same reaction must give the SAME ΔH.\n")

    elif choice == "2":
        totalA = build_path("Pathway A")
        totalB = build_path("Pathway B")

        print("\n COMPARISON")
        print("ΔH for Pathway A =", totalA, "kJ/mol")
        print("ΔH for Pathway B =", totalB, "kJ/mol")

        if totalA == totalB:
            print("\n Both pathways give the same ΔH.")
            print("Hess's Law verified: ΔH is path-independent.\n")
        else:
            print("\n ΔH values are not the same.")
            print("Possible mistake in reaction steps or ΔH values.\n")

    else:
        print("Invalid choice.")


def build_path(name):
    print("\n", name)
    steps = int(input("How many steps in this pathway? "))

    total_dh = 0
    reactions = []
    enthalpies = []

    for i in range(1, steps + 1):
        print("\nStep", i)
        rxn = input("  Reaction: ")
        dh = float(input("  ΔH (kJ/mol): "))

        reactions.append(rxn)
        enthalpies.append(dh)
        total_dh += dh

    print("\n Summary for", name)
    for i in range(steps):
        print("Step", i + 1, ":", reactions[i], "| ΔH =", enthalpies[i], "kJ/mol")

    print("Total ΔH for", name, "=", total_dh, "kJ/mol\n")
    return total_dh

if __name__ == "__main__":
    module7()
