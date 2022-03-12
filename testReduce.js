items =[1,2,3,4,5,5];
let reduceFunction = require('./reduce');

// Testcases
console.log(reduceFunction(items, cb = (startingValue, element) => { return startingValue + element },10));  // Expects output 30
console.log(reduceFunction(items, cb = (startingValue, element) => { return startingValue + element }));  // Expects output 21
console.log(reduceFunction());        // returns 0
console.log(reduceFunction([]));      // returns 0
console.log(reduceFunction(null));    // returns 0
console.log(reduceFunction(undefined)); // returns 0

console.log(reduceFunction([],null,10)); // returns 0
console.log(reduceFunction([],undefined,10));    // returns 0

console.log(reduceFunction(undefined,undefined,10));     // returns 0
console.log(reduceFunction(undefined,null,10));          // returns 0

console.log(reduceFunction(null,undefined,10));          // returns 0
console.log(reduceFunction(null,null,10));               // returns 0
