//1
// const animal = Object.create(null);

// animal.eat = function() {
//     console.log("eat");
// }

// const rabbit = Object.create(animal);

// rabbit.jump = function() {
//     console.log("jump");
// }

// animal.eat();
// rabbit.jump();

// console.log(animal);
// console.log(rabbit);

//2

// function Animal() { 
// }

// Animal.prototype.eat = function() {
//     console.log("eat");
// }

// const animal = new Animal();

// const rabbit = new Animal();

// rabbit.jump = function() {
//     console.log("jump");
// }

// animal.eat();
// rabbit.jump();
// rabbit.eat();

// console.log(animal);
// console.log(rabbit);

//3

class Animal {
     constructor() {

    }

    eat() {
        console.log("eat");
    }
}

class Rabbit extends Animal {
    constructor() {

    }

    jump() {
        console.log("jump");
    }
}

const animal = new Animal();
const rabbit = new Rabbit();

animal.eat();
rabbit.jump();
rabbit.eat();

console.log(animal);
console.log(rabbit);