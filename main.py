from module1 import system_classifier                    
from module2 import run_ideal_real_mapper               
from module3 import work_calculator                    
from module4_heat_capacity import run_heat_capacity_simulator  
from module5 import run_entropy_simulation              
from module6_gibbs_spontaneity import module6         
from module7_hess_law import module7                  


def main_menu():

    while True:

        print("""
     THERMOLAB 
 THERMODYNAMICS TOOLKIT
       Main Menu

1) Thermodynamic System Classifier
2) Ideal Gas vs Real Gas Mapper (Z vs P)
3) Work Calculator (Reversible vs Irreversible)
4) Heat Capacity & Heating Simulator
5) Entropy Simulation (Particle Mixing)
6) ΔG Spontaneity Studio
7) Hess's Law Pathway Builder
0) Exit
""")

        choice = input("Enter your choice (0–7): ").strip()

        if choice == "1":
            system_classifier()

        elif choice == "2":
            run_ideal_real_mapper()

        elif choice == "3":
            work_calculator()

        elif choice == "4":
            run_heat_capacity_simulator()

        elif choice == "5":
            run_entropy_simulation()

        elif choice == "6":
            module6()

        elif choice == "7":
            module7()

        elif choice == "0":
            print("Thank you for using the Thermodynamics Toolkit! :)")
            break

        else:
            print("Invalid choice. Please enter a number from 0 to 7.")


if __name__ == "__main__":
    main_menu()
