const person = {
  name: 'jan',
  age: 12,
};

// object spread not supported by node 6
const otherPerson = { ...person, age: 20 };
const bigNumber = 123_234_234;

console.log(otherPerson);
console.log(bigNumber);

const name = 'Freddy';
if (typeof name === 'string');

if (!('serviceWorker' in navigator)) {
  // you have an old browser :-(
}

const greeting = 'hello';
console.log(`${greeting}world!`);

[(1, 2, 3)].forEach(x => console.log(x));
