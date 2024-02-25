// let, const

let score = 10;

console.log(score);

// String, Numbers, Boolean, null, undefined, Symbol

const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const  x = null;
const y = undefined;
let z; // also undefined

console.log(typeof z); // testing types

// Concatenation
console.log("My name is" +  "and I am " + age);
// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

const s = 'Hello World';
console.log(s.length); // this is property, not function (function has parentheses)
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split(''))

const sentence = 'technology, computers, it  code';
console.log(sentence.split(', '))

// Arrays - variables that hold mutliple values

const numbers = new Array('1,2,3,4,5,6');
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'] // can use different data types in same structure
console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes';
console.log(fruits);

fruits.push('mangos');
console.log(fruits);

fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));


///////////////////////////// object literals ////////////////////////

const person = {
    firstName: 'John',
    lastName: 'Doe', 
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: "MA"
    }
}

console.log(person)
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1])
console.log(person.address.city);

const {firstName, lastName, address: {city}} = person; // how to pull out attributes and use them as variables
console.log(firstName);
console.log(city)

person.email = 'John@gmail.com'
console.log(person)

// array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting wtih boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text)

const todoJSON = JSON.stringify(todos); // JSON format to send data to server
console.log(todoJSON)

// For
for(let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
}
console.log(" ");

// while
let i = 0;
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}
console.log(" ");



for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
console.log(" ");
//////////////////////////// Loops ///////////////////////////////
// For of loop
for(let todo of todos) {
    console.log(todo.text);
}
console.log(" ");


// forEach,  map, filter
todos.forEach(function(todo) {
    console.log(todo.text)
}); 

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text; // returns only completed text
});
console.log(`Completed todos are:`);
console.log(todoCompleted);

/////////////////////////// conditionals ////////////////////////////////////

const b = 15;
const c = 10;

if(b === 10) {
    console.log('b is 10');
} else if( b > 10){ 
    console.log('b is greater than 10');
} else {
    console.log('b is less than 10');
}

if(b > 4 || y > 10) {
    console.log("b is more than 5 or y is more than 10");
}

if(b > 4 && y > 10) {
    console.log("b is more than 5 and y is more than 10");
}

const color = b > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log("color is blue");
        break;
    default:
        console.log("color is NOT red or blue")
}


////////////////////// functions ////////////////////////////////////
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums());
console.log(addNums(5,8));
