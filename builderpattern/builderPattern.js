// builder pattern is used when there are many inter linking parts or many optional and required fields
// this is traditional way
class Address {
  constructor(zip, street) {
    (this.zip = zip), (this.street = street);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBUilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

const user = new UserBUilder("Bikram").build();
const user1 = new UserBUilder("Bikram1").setAge(10).build();
const user2 = new UserBUilder("Bikram1")
  .setAge(10)
  .setPhone("9886714345")
  .build();

console.log(user);
console.log(user1);
console.log(user2);

// this gives nice clean interface and now we dont need to have to give any value that is undefined 

