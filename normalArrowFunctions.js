/**
 * Ref : https://medium.com/better-programming/javascript-whats-the-difference-between-normal-and-arrow-functions-74c367324ae1
 *
 * What's the difference between normal and arrow functions
 *
 */

// A normal function’s this is bound to the object that calls the function.
var x = 10;
var obj = {
  sayHi,
  x: 20,
};

function sayHi() {
  console.log(this.x);
}

sayHi(); // 10
obj.sayHi(); // 20

// In contrast to a normal function, an arrow function’s this is always bound to
// the outer function that surrounds the inner function.
var x = 10;

var sayHi = () => {
  console.log(this.x);
};

var obj = {
  sayHi,
  x: 20,
};

sayHi(); // 10
obj.sayHi(); // 10

// Arguments
// A normal function has a special property when it’s invoked: an argument.
// It contains a lot of useful information — arguments passed into the function,
// the caller, etc. The arguments are very useful when you can’t guarantee how many arguments
// will be passed into the function.
function classroom() {
  console.log(`We have ${arguments.length} student(s) today`);
}
// We have 3 student(s) today
classroom("Jane", "Mark", "James");
// We have 1 student(s) today
classroom("Miller");

// But an arrow function doesn’t have an arguments property.
var classroom = () => {
  console.log(`We have ${arguments.length} student(s) today`);
};
classroom("Jane", "Mark", "James");
// Uncaught ReferenceError:
// arguments is not defined
