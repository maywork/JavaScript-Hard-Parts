/*
Create a function 10 squared
  - Takes no input/arguments
  - Returns 10*10 
*/

// Traditional function declaration style
function tenSquared() {
  return 10*10
}

function NineSquared() {
  return 9*9
}
/*
What coding principle is this breaking?
  - DRY (Don't Repeat Yourself)
*/

// Generalized function declaration style
function squareNum(num) {
  return num*num;
}
squareNum(10); // 100
squareNum(9); // 81
squareNum(8); // 64
// We generalized the function to make it reusable

/*
Create a function that copies array and multiplies by 2
  - Takes and array
  - Returns an array with doubled values
*/

function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const myArray = [1,2,3];
const result = copyArrayAndMultiplyBy2(myArray); // [2,4,6]

/*
Create a function that copies array and divides by 2
  - Takes and array
  - Returns an array with halved values
*/

function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const newResult = copyArrayAndDivideBy2(myArray); // [0.5, 1, 1.5]
/*
What coding principle is this breaking?
  - Rewriting
*/

// Generalize function to prevent rewriting
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) { return input * 2; }
function divideBy2(input) { return input / 2; }
const GeneralizedResult = copyArrayAndManipulate([1,2,3], multiplyBy2);
const GeneralizedResult2 = copyArrayAndManipulate([1,2,3], divideBy2);

// Arrow functions - a shorthand way to save functions
function multiplyby2(input) { return input * 2; }
//         ||
let multiplyby2 = (input) => { return input * 2 }
//         ||
let multiplyby2 = (input) => input * 2
//         ||
let multiplyby2 = input => input * 2

const output = multiplyby2(3); // 6

// We can even pass multiplyby2 directly without a name
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

// const multiplyby2 = input => input * 2 // arrow function
const resultArrowShorhand = copyArrayAndManipulate([1,2,3], input => input*2); 
