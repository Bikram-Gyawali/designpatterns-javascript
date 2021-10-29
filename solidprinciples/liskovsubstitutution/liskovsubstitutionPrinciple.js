class FlyingBird {
  fly() {
    console.log("i can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quak() {
    console.log("i quack quack");
  }
}

class Penguin extends SwimmingBird {}

function makeBirdFly(bird) {
  bird.fly();
}

function makeBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdSwim(penguin);

// this program satuesfies the principle of liskov substitution i am feeling bored with this principles and design patterns kati lang ho yr kun le k vanaxa kunai le k vanxa module based thik jsto lagyo malai ta lets see aru kasto xa i liked the null ,fcade,command more than this liskco although it comes under solid principle lets see


// there is problem with oop concepts in this program as in js it is not avilablee to inherit from more than one class so we need to follow the function composiotion pardaigm as the world is going async with functionlly pattern watch this video for more information about function composition 
// https://www.youtube.com/watch?v=nnwD5Lwwqdo

// its all about getting the work done easily 
// kiss= keep it simple stupid 
