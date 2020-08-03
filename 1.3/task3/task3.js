fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // promise {pending}
  .then((data) => {
    data.forEach((e) => {
      console.log(e.name);
    });
  })
  .catch((error) => console.log(error));
