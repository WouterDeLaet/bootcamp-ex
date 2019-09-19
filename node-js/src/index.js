const person = {
  name: "jan",
  age: 12
};

// object spread not supported by node 6
const otherPerson = { ...person, age: 20 };
const bigNumber = 123_234_234;

console.log(otherPerson, bigNumber);
