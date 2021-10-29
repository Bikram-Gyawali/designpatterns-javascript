class Address {
  constructor(zip, street) {
    (this.zip = zip), (this.street = street);
  }
}

class User {
  constructor(name, age, phone, address) {
    (this.name = name),
      (this.age = age),
      (this.phone = phone),
      (this.address = address);
  }
}

const user = new User("Bikram",undefined,undefined, new Address("4","butwal"))
console.log(user)

// so thee problem here is if the user has many parametrrs tibe egive then if some re null or undefinenda we need to give many unndefined types and this would be hactice if there are 30 parameters

// thats whre the builder pattern comes in get to the next file for the solution with builder pattern