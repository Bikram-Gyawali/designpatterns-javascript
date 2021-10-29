// fetch api build into the browser
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "appllication/json" },
  }).then((res) => res.json());
}

function getUserPost(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    res.json();
  });
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPost(user.id).then((posts) => {
      console.log(user.name);
      console.log(user.length);
    });
  });
});
