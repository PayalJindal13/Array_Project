items = [1,2,3,4,5,5];
let findElement = require('./find.js');

// Testcases
console.log(findElement(items,cb = (element, index, items) => { 
    return element % 2 === 0 }));  // returns 2

console.log(findElement([1,5,3],cb = (element, index, items) => { return element % 2 === 0}));  // return undefined

console.log(findElement());        // returns 0
console.log(findElement([]));      // returns 0
console.log(findElement(null));    // returns 0
console.log(findElement(undefined)); // returns 0

console.log(findElement([], null )); // returns 0
console.log(findElement([], undefined));    // returns 0

console.log(findElement(undefined,undefined));     // returns 0
console.log(findElement(undefined,null));          // returns 0

console.log(findElement(null,undefined));          // returns 0
console.log(findElement(null,null));               // returns 0
