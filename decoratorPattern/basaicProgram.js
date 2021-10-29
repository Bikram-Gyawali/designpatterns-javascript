// the decorator pattern is a design pattern that allows to add new behaviour to be added dynamically to the existing object

// user decorator

var User = function (name) {
  this.name = name;
  this.say = function () {
    log.add("User:" + this.name);
  };
};

var DecoratedUser = function (user, street, city) {
  this.user = user;
  this.name = user.name;
  this.street = street;
  this.city = city;
  this.say = function () {
    log.add(
      "Decoreated Useer:" + this.name + ", " + this.street + ", " + this.city
    );
  };
};

var log = (function () {
  var log = "";
  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      alert(log);
      log = "";
    },
  };
})();

var user = new User("Kelly");
user.say();

var decorated = new DecoratedUser(user, "butwal", "Rupandehi");
decorated.say();
log.show();
