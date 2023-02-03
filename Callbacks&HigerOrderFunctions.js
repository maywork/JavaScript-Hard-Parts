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
// We generalized the functionto make it reusable
