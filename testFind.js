items = [1,2,3,4,5,5];
let findFunction = require('./find.js');

// Testcases
console.log(findFunction(items,cb = element => { return element % 2 === 0 }));  // returns 2

console.log(findFunction([1,5,3],cb = element => { return element % 2 === 0}));  // return undefined

console.log(findFunction());        // returns 0
console.log(findFunction([]));      // returns 0
console.log(findFunction(null));    // returns 0
console.log(findFunction(undefined)); // returns 0

console.log(findFunction([],null)); // returns 0
console.log(findFunction([],undefined));    // returns 0

console.log(findFunction(undefined,undefined));     // returns 0
console.log(findFunction(undefined,null));          // returns 0

console.log(findFunction(null,undefined));          // returns 0
console.log(findFunction(null,null));               // returns 0
