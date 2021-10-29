class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bikram";
  }
}

class NullUser{
    constructor(){
        this.id=-1,
        this.name='Guest'
    }
    hasAccess(){
        return false;
    }
}

const users = [new User(1, "Bikram"), new User(2, "Bicky")];

function getUser(id) {
  const user = users.find((user) => user.id == id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);

  // here we need to check explicitly / log out to print guest if the user has no name

  // this is problem as we need to check everytime we use the users name

  console.log("Hello " + user.name);

  // this will throw an error if we do not first check that the user object has this function available and isn't null. this is a lot of repeated code we need to  add code to check everytime if user has access

  if (user.hasAccess()) {
    console.log("you have access");
  } else {
    console.log("you are not allowed here ");
  }
}

// check with bellow on console
printUser(1) 
printUser(2)
printUser(3)  