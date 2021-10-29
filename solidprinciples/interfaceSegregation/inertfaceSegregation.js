class Entity {
  constructor(name) {
    this.name = name;
  }
}
const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack() {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamae = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover); //this means to inlcude mover comoponent into the Character class
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  constructor(name, attackDamae) {
    super(name);
    this.attackDamage = attackDamae;
  }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);


// here we have one base class and other componennts re assigned ton the calass acc to need so there will not be any instance or properties defined that is of no use .as there is a turret class in the previous program it was insitialized with move property too but the turret cannot move and here in this program the turret has only the properties that it has no extra work for the code .
// thats it i liked this part --> InterfaceSegregation