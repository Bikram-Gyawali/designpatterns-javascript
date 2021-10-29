class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  addCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  subCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  mulCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  divCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undo() {
    this.command = this.history.pop();
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }
  execute(currentvalue) {
    return currentvalue + this.value;
  }
  undo(currentvalue) {
    return currentvalue - this.value;
  }
}

class SubCommand {
  constructor(value) {
    this.value = value;
  }
  execute(currentvalue) {
    return currentvalue - this.value;
  }
  undo(currentvalue) {
    return currentvalue + this.value;
  }
}

class MulCommand {
  constructor(value) {
    this.value = value;
  }
  execute(currentvalue) {
    return currentvalue * this.value;
  }
  undo(currentvalue) {
    return this.value / currentvalue;
  }
}

class DivCommand {
  constructor(value) {
    this.value = value;
  }
  execute(currentvalue) {
    return currentvalue / this.value;
  }
  undo(currentvalue) {
    return currentvalue * this.value;
  }
}

class AddandMultiply {
  constructor(addvalue, mulvalue) {
    this.addvalue = new AddCommand(addvalue);
    this.mulvalue = new MulCommand(mulvalue);
  }
  execute(currentvalue) {
    const newValue = this.addvalue.execute(currentvalue);
    return this.mulvalue.execute(newValue);
  }
  undo(currentvalue) {
    const newvalue = this.addvalue.undo(currentvalue);
    return this.addvalue.undo(newvalue);
  }
}

const calculator = new Calculator();
// calculator.add(14);
// console.log(calulator.value);
// calculator.subtract(10);
// console.log(calculator.value);
// calulator.mulVal(40);
// console.log(calculator.value);
// calculator.divVal(31);
// console.log(calaulator.value);
calculator.addCommand(new AddCommand(30));
console.log(calculator.value);
calculator.subCommand(new SubCommand(10));
console.log(calculator.value);
calculator.mulCommand(new MulCommand(4));
console.log(calculator.value);
calculator.divCommand(new DivCommand(10));
console.log(calculator.value);

calculator.undo();
console.log(calculator.value);

calculator.execute(new AddandMultiply(30, 5));
console.log(calculator.value);
