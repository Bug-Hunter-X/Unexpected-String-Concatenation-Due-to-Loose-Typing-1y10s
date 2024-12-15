function foo(a, b) {
  //Explicit type checking:
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b; 
}

//Alternative using Number() for type conversion:
function foo2(a, b) {
  return Number(a) + Number(b);
}
console.log(foo(1,2)); //Output 3
console.log(foo(1, '2')); // Output: Error: Inputs must be numbers
console.log(foo2(1, '2')); // Output 3