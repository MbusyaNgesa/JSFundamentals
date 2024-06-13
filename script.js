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

//Array 2
let fruit = ["Mangoes", "Oranges", "Grapes"];
fruit[3] = "Banana";
console.log(fruit);

//Push object to end of an Array

let Ian = ["Ngesa", "Mbusya"];
Ian.push("Dev");
//Push Object to beginning of an array
Ian.unshift("Rada");
//Removing object
Ian.pop();
console.log(Ian);
//If an object is an array (true or false)
console.log(Array.isArray("hello"));
//Indexing
console.log(Ian.indexOf("Ngesa"));

//Object literals
const person = {
  firstName: "John",
  lastName: "Smith",
  age: 28,
  hobbies: ["music", "eating", "hiking", "hunting"],
  address: {
    street: "00100 Utawala",
    city: "Nairobi",
    state: "Avenue",
  },
};

//Destructuring an array and embedded object
const {
  firstName,
  lastName,
  address: { state },
} = person;

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(firstName);
console.log(state);

//Creating objects
const todos = [
  {
    id: 1,
    text: "I am hungry",
    isCompleted: true,
    z: null,
  },
  {
    id: 2,
    text: "I just ate",
    isCompleted: false,
    z: null,
  },
  {
    id: 3,
    text: "I am Vengeance",
    isCompleted: true,
    z: null,
  },
];

console.log(todos[2].text);

//Sending data to Server
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//For Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//For Loop Decrement
for (let j = 10; j > 1; j--) {
  console.log(`Decrement: ${j}`);
}

//While loop
let i = 0;
while (i < 10) {
  console.log(`While Loop Numbers: ${i}`);
  i++;
}
//While Decrement
/* let j = 10;
while (j > 1) {
  console.log(`Decrement Numbers:${j}`);
  i--;
}*/

//Looping styles
//Style 1
for (let k = 0; k < todos.length; k++) {
  console.log(todos[k].isCompleted);
}

//Style 2
for (let to of todos) {
  console.log(to.id);
}

//High Order Array Methods
//forEach loop
todos.forEach(function (todo) {
  console.log(todo.text);
});

//map
const todoText = todos.map(function (todos) {
  return todos.id;
});
console.log(todoText);

//filter
const isComplete = todos.filter(function (todos) {
  return todos.isCompleted === true;
});
console.log(isComplete);
