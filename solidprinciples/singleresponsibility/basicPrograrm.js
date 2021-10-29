class CalorieTracker {
  constructor(maxCalorie) {
    this.maxCalorie = maxCalorie;
    this.currentCalories = 0;
  }
  trackCaloroies(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalorie) {
      this.logCalorieSurplus();
    }
  }

  logCalorieSurplus() {
    console.log("Max caloreis excedded");
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCaloroies(500);
calorieTracker.trackCaloroies(1000);
calorieTracker.trackCaloroies(700);


// here single responsibility patern is voided as S from the solid priniple means to every class it has only one operation to be performed or only one value to be changed so we can solve these kind of problems by making a module for each operation