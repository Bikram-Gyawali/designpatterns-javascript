// here now the calorie tracker has only one reason to chnge hence we obtained the single responsibility 


import logMessage from "./logger";
class CalorieTracker {
    constructor(maxCalorie) {
      this.maxCalorie = maxCalorie;
      this.currentCalories = 0;
    }
    trackCaloroies(calorieCount) {
      this.currentCalories += calorieCount;
      if (this.currentCalories > this.maxCalorie) {
        this.logMessage("Max caloreis excedded")
      }
    }  
  }
   
  const calorieTracker = new CalorieTracker(2000);
  calorieTracker.trackCaloroies(500);
  calorieTracker.trackCaloroies(1000);
  calorieTracker.trackCaloroies(700);
  
