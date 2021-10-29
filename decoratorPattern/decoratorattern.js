// COFFEE SHOP DECORATOR STORY

// Now imagine a coffee shop. The coffee shop only sells coffee. But, the clever manager figured out that they could earn an extra 💰 by selling different coffee condiments separately. We can help them manage that. Let's see how we can use our Decorator Pattern in this case.

// i am basically stutdying from a blog on this topic

// constructor that will be modified
function Coffee(desc) {
  // this type of the copy
  this.type = desc;
  // the description that will be modified
  this.description = desc;

  // A function expression is very similar to and has almost the same syntax as a function declalration. the main diffrence between a function expression and a function declaration us the functio name whuch can be omitted in function expressions to create anonymous funcutins.A function expression can be used as an Immediately invoked funcion expression
  this.cost = function () {
    return 1.9;
  };
  this.desc = function () {
    return this.description;
  };
  // a regular fucntion
  function type() {
    return this.type;
  }
}

// we are going to decorate our with whip,milk soy or
//more variations of coffee for this  we just need to add another condiement function
// which is going to change the price and the description that we see at the en

// decorator 1

function Whip(hosueBlend) {
  var hbCost = hosueBlend.cost();
  var hbDesc = hosueBlend.desc();

  hosueBlend.desc = function () {
    return hbDesc + ",whip";
  };
  hosueBlend.cost = function () {
    return hbCost + 0.09;
  };
}

// Decorator 2
function Milk(hosueBlend) {
  var hbCost = hosueBlend.cost();
  var hbDesc = hosueBlend.desc();
  hosueBlend.desc = function () {
    return hbDesc + ",Milk";
  };
  hosueBlend.cost = function () {
    return hbCost + 0.1;
  };
}

// decorator 3

function Soy(hosueBlend) {
  var hbCost = hosueBlend.cost();
  var hbDesc = houseBlend.desc();

  houseBlend.desc = function () {
    return hbDesc + ",Milk";
  };
  houseBlend.cost = function () {
    return hbCost + 0.1;
  };
}

// decorator 3
function Soy(houseBlend) {
  var hbCost = houseBlend.cost();
  var hbDesc = houseBlend.desc();
  houseBlend.desc = function () {
    return hbDesc + ",Soy";
  };
  houseBlend.cost = function () {
    return hbCost + 0.12;
  };
}

// new we create a brand new coffee object instance
// for example espresso (type="Espresso" descripion "Espresso")

let coffee = new Coffee("Espresso");
// double milk decorator
Milk(coffee);
Milk(coffee);

// a whip
Whip(coffee);

// and a soy
// this aint coffee anymore idk what this is
Soy(coffee);

console.log('%c%s', 'color: black; background: red; font-size: 24px;', "Coffee: " +coffee.desc()+` ${coffee.cost()}`);

let coffee2 = new Coffee("House Blend");
Milk(coffee2);
//A whip
Whip(coffee2);
console.log('%c%s', 'color: black; background: red; font-size: 24px;', "Coffee: " +coffee2.desc()+`, $${  coffee2.cost()}`);
