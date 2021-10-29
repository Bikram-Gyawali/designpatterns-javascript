// segragate means to divde ,isolate,set apart from eachother in normal

// JS originally doesnt has any interface functionalty within it self but we can apply with diffrent classes and inheritance approach that works the same with javascript

class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
  move() {
    console.log(`${this.name} moved`);
  }
  attack(targetEntity) {
    console.log(
      `${this.name}  attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }
  move() {
    return null;
  }
  attack() {
    return null;
  }
}

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }
  move() {
    return null;
  }
  takeDamage() {
    return null;
  }
}

const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);


// the problem is the base class has much functionallty but are not been used all of them so we need to break class into parts cause loading the class / making an instance of class brings properties with it with all those un used property and thats an extra work why should we make an instance pf certain property that we have no use which so we should break the class into small classes and make instance and here comes the second problm as we discussed earlier in the 
// SOLID
// L => liskov substitution principile classes /oop in js has not yet support for inheriting form more than one class so we should be using function composition pattern
//  lets see the next program with solution 