// main.cjs.js
const myLib = require("./myLib.cjs.js");
let val1 = process.argv[2];
let val2 = process.argv[3];

console.log(myLib.sum(val1, val2));

