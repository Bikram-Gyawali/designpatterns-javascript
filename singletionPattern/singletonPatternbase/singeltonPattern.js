// https://i.imgur.com/T4iugFr.png
// it is a way of building single object and are shared resource see the image given to understand more clearly

// it can be incredably hard to test and change refreator and as all the resource are dependent on it then there arises a racee condition data inside objects  become more jumblled because of this downside it is porbhited to use singleton pattern

class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance  
  }
  log(message) {
    console.log(`Fancy: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`);
  }
}

const logger=new FancyLogger();
Object.freeze(logger)

export default logger