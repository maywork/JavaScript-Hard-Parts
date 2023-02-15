/*
Challenge 1
Create a function addTwo that accepts one input and adds 2 to it.
*/
function addTwo(num) { return num + 2; }
console.log(addTwo(3));
console.log(addTwo(10));
/*
Challenge 2
Create a function addS that accepts one input and adds an "s" to it.
*/
function addS(word) { return word + "s"; }
console.log(addS('pizza'));
console.log(addS('bagel'));
/*
Challenge 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. 
*/
function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
console.log(map([1, 2, 3], addTwo));
