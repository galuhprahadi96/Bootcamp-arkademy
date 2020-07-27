let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborought",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};


//A. Spread operator
data = { ...data, name: "Galuh Prahadi Gumelar", email: "galuhprahadi96@gmail.com", hobby: ["Memancing", "Traveling", "Desain", "Coding"] };
// console.log(data);


//B. Destructuring
const { street, city } = data.address;
console.log(`${street}, ${city}`);