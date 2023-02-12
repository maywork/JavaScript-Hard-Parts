// functions with memories

// it all starts with returning a function to another function

// Functions can be returned from other functions in JavaScript
function createFunction() {
  function multiplyBy2(num) {
    return num*2;
  }
  return multiplyBy2
}

const generatedFunc = createFunction();
// arguments do not make a function run, parentheses make functions run
console.log(generatedFunc) // ƒ multiplyBy2()
typeof generatedFunc // 'function'
const result = generatedFunc(3)
console.log(result) // 6


// Nested Function Scope
// Calling a function in the same function call as it was defined

function outer() {
  let counter = 0;
  function incrementCounter() { counter++; }
  incrementCounter();
}
outer(); // where you define the function determines what data it has access to when it is called/invoked

// Calling a function outside of the function call in which it was defined
function outer() {
  let counter = 0;
  function incrementCounter() { counter++;}
  return incrementCounter;
}

const myFunction = outer();
myFunction(); //1
myFunction(); //2
// however we cannot access the 'counter' data directly from this function unless we create a local variable in the function definition of 'myNewFunction' so it is also private data

const anotherFunction = outer();
anotherFunction(); //1
anotherFunction(); //2