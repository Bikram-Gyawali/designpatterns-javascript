// fcacde pattern is used, here we can see less code as compared to another program

// can be mostly used for frontend fetching the api
// dificult ugly api can be used nicely
// Want to remember that this can be better making module and import it would look much better and comfortable

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPost(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    userId: userId,
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

function getFetch(url, prams = {}) {
  const queryString = Object.entries(prams)
    .map((param) => {
      return `${param[0]}=${param[1]}}`;
    })
    .join("&");
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application:json" },
  }).then((res) => res.json());
}
