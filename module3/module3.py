

import math

def work_calculator():
    print(" WORK CALCULATOR: REVERSIBLE vs IRREVERSIBLE EXPANSION")

    # Take inputs from user
    try:
        P_ext = float(input("Enter external pressure P_ext (in atm): "))
        V1 = float(input("Enter initial volume V1 (in L): "))
        V2 = float(input("Enter final volume V2 (in L): "))

        # For invalid inpits
        if V1 <= 0 or V2 <= 0:
            print("Volume must be greater than zero.")
            return
        if V2 == V1:
            print("No expansion or compression occurred.")
            return

    except ValueError:
        print("Please enter numbers only.")
        return

    # Irreversible Work Calculation
    W_irrev = -P_ext * (V2 - V1)

    # Reversible Work Calculation
    n = 1
    R = 0.0821 # L·atm/(mol·K)
    T = 298
    W_rev = -n * R * T * math.log(V2 / V1)

    # Output 
    print(f"""
    
                WORK CALCULATOR
    
    Initial Volume (V1): {V1} L
    Final Volume (V2): {V2} L
    External Pressure : {P_ext} atm
    
    Irreversible Work (W_irrev): {W_irrev:.3f} L·atm
    Reversible Work (W_rev) : {W_rev:.3f} L·atm
    
    """)

if __name__ == "__main__":
    work_calculator()
