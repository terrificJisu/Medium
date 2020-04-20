/**
 * Ref: https://medium.com/javascript-in-plain-english/seven-things-you-should-know-about-object-destructuring-in-es6-699a1bce3595
 * Javascript object destructuring
 */

// Basic
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true

/**
 * 1.1: Singularity : be careful of use `let`
 * The code below won’t work
 * JavaScript treats {...} in the main code flow (not inside another expression)
 * as a code block (reminder : let has a block scope)
 */
// error
let title, width, height;
// error in this line
{ title, width, height } = { title: "Menu", width: 200, height: 100 }

// correction 1
let title, width, height;
// error in this line
{
  (title = "Menu"), (width = 200), (height = 100);
}
console.log(title, width, height); // Menu 200 100

// correction 2
let title, width, height;
// okay now
({ title, width, height } = { title: "Menu", width: 200, height: 100 });
console.log(title, width, height); // Menu 200 100

/**
 * Alias
 */
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

/**
 * Default
 */
const { a = 10, b = 5 } = { a: 3 };
console.log(a); // 3
console.log(b); // 5

const { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa); // 3
console.log(bb); // 5

/**
 * Function parameter destructuring
 */

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user)); // "jdoe is John"

/*
 * Be careful of default parameter
 */
function showMenu({ title = "Menu", width = 100, height = 200 }) {
  alert(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200

showMenu(); // ERROR "Cannot destructure property `title` of 'undefined' or 'null'."

// correction 1
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200

/**
 * Nested Object function parameter destructuring
 */
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

console.log(whois(user));  // "jdoe is John"

/**
 * spread in Object Destructuring
 */

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }