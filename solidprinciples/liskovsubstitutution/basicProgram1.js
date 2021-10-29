class Bird {
  fly() {
    console.log("i can fly");
  }
}

class Duck {
  quak() {
    console.log("i quack quack");
  }
}

class Penguin extends Bird {
  fly() {
   throw new Error("cannot fly");
  }
  swim() {
    console.log("i can swim");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);


// also here there is error as it voilates the principle of liskov substitution see next program for the solution of this program with followinng the liskov principle 