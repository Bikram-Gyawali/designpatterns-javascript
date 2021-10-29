class Calculator {
  constructor() {
    this.value = 0;
  }

  add(addVal) {
    this.value = this.value + addVal;
  }
  subtract(subVal) {
    this.value = this.value - subVal;
  }
  multiply(mulVal) {
    this.value = this.value * mulVal;
  }
  divide(divVal) {
    this.value = this.value / divVal;
  }
}

const calculator = new Calculator();
calculator.add(14);
console.log(calulator.value);
calculator.subtract(10);
console.log(calculator.value);
calulator.mulVal(40);
console.log(calculator.value);
calculator.divVal(31);
console.log(calaulator.value);
