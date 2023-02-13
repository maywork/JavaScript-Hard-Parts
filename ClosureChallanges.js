/* 
Challenge 1
 Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
 */

// function createFunction() {
//   function innerFunction() {
//     console.log('hello');
//   }
//   return innerFunction;
// }
function createFunction() {
  const innerFunction = () => console.log('hello');
  return innerFunction;
}
const function1 = createFunction();
function1(); // => should console.log('hello');

/* Challenge 2
 Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
*/
function createFunctionPrinter(input) {
  const innerFunction = () => console.log(input);
  return innerFunction;
}

const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

/*
 Challenge 3
 Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
 Uncomment those lines of code. Try to deduce the output before executing. 
 Now we are going to create a function addByX that returns a function that will add an input by x.
*/
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); //1
willCounter(); //2
willCounter(); //3

jasCounter(); //1
willCounter(); //4


function addByX(x) {
  const innerFunction = (input) => input + x;
  return innerFunction;
}

const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9