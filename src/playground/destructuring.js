//objects
const person = {
  name: "Steffanie",
  age: 26,
  location: {
    city: "Phil",
    temp: 36,
  },
};

const { name: firstName = "andrew", age } = person;
// const name = person.name;
//const age = person.age;

const { city, temp: temparature } = person.location;
console.log(firstName, city, temparature);

console.log(person);

//challenge
const book = {
  title: "Ego",
  author: "Ryan",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-published" } = book.publisher;
console.log(publisherName);

//array destructuring
const address = ["1299 s Juniper Street", "Philly", "Penns", "19125"];

const [, citty, , zip] = address;

console.log(citty, zip);

//challenge
const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
