//Data Types = string, number, boolean, null, undefined
const name = "Ngesa";
const age = 22;
const isCool = true;
const rating = 8.9;
const x = null;
const y = undefined;

//concatenation old school

console.log("My Name is " + name + " I am age " + age);

//concatenation using template string
console.log(`My name is ${name} I'm aged ${age}`);

const s = "I am Batman";

console.log(s.substring(0, 8).toLowerCase());
console.log(s.split(""));
console.log(s.split(","));

//Arrays
const numbers = new Array(1, 2, 3, 4, 5);

console.log(numbers);

const fruits = ["Mangoes", "Oranges", "Apples"];

console.log(fruits[1]);
