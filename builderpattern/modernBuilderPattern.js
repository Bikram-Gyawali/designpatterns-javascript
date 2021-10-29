// this is a modern builder pattern applied more the javscript way
class Address {
  constructor(zip, street) {
    (this.zip = zip), (this.street = street);
  }
}

class User {
  constructor(name, { age, phone="456789", address } = {}) { //we can also give the default value too
    this.name = name; // as name parametr is reqired and other are optional
    this.age = age;
    (this.phone = phone), (this.address = address);
  }
}

let user = new User("Bikram");
let user1 = new User("BIcky", { age: 10, phone: "781134" });
let user2 = new User("BIcky", { age: 10, phone: "781134",address:new Address("5","ktm")});

console.log(user);
console.log(user1);
console.log(user2);
