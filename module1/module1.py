
def system_classifier():

    print("THERMODYNAMIC SYSTEM CLASSIFIER")

    # Take inputs from user
    system = input("Enter system type (open/closed/isolated): ").lower()
    wall = input("Enter wall type (diathermic/adiabatic): ").lower()

    # For invalid inputs
    if system not in ["open", "closed", "isolated"]:
        print("Invalid system type.Please choose correctly.")
        return

    if wall not in ["diathermic", "adiabatic"]:
        print("Invalid wall type.Please choose correctly.")
        return

    # OPEN SYSTEM
    if system == "open":
        heat = (wall == "diathermic")
        work = True
        matter = True

    # CLOSED SYSTEM
    elif system == "closed":
        heat = (wall == "diathermic")
        work = True
        matter = False

    # ISOLATED SYSTEM
    elif system == "isolated":
        heat = False
        work = False
        matter = False

    # Output
    print(f"""
    
          THERMODYNAMIC SYSTEM CLASSIFIER
    
    System Type : {system.upper()}
    Wall Type : {wall.upper()}
    
    Heat Transfer : {heat}
    Work Transfer : {work}
    Matter Transfer : {matter}
    
    """)

if __name__ == "__main__":
    system_classifier()
