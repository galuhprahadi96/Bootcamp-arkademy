fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // promise = pending
  .then((response) => {
    response.forEach((e) => {
      console.log(e.name);
    });
  });
