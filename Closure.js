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
console.log(result) // 6
