// it is a way of building single object and are shared resource see the image given to understand more clearly

// it can be incredably hard to test and change refreator and as all the resource are dependent on it then there arises a racee condition data inside objects  b ecome more jumblled because of this downside it is porbhited to use singleton pattern

// code does not use sngleton pattern which shoould use the singleton pattern

export default class FancyLogger {
  constructor() {
    this.logs = [];
  }
  log(message) {
    this.logs.push(message);
    console.log(`Fancy:${message}`);
  }
  printLogCount() {
    console.log(`${this.logs.length} logs`);
  }
}

