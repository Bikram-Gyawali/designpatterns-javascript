class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bikram";
  }
}

const users = [new User(1, "Bikram"), new User[(2, "Bicky")]()];

function getUser(id) {
  return users.find((user) => user.id == id);
}

function printUser(id) {
  const user = getUser(id);

  // here we need to check explicitly / log out to print guest if the user has no name

  // this is problem as we need to check everytime we use the users name

  let name = "Guest";
  if (user != null && user.name != null) {
    name = user.name;
  }
  console.log("Hello" + name);

  // this will throw an error if we donnot first check that the user object has this function available and isn't null. this is a lot of repeated code we need to  add code to check everytime if user has access

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("you have access");
  } else {
    console.log("you are not allowed here ");
  }
}
