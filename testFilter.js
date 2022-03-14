items = [1,2,3,4,5,5];
let filterFunction = require('./filter');

//Testcases
console.log(filterFunction(items,cb = (element, index, items) => {return element > 2})); // returns [3, 4, 5, 5]

console.log(filterFunction());        // returns empty array
console.log(filterFunction([]));      // returns empty array
console.log(filterFunction(null));    // returns empty array
console.log(filterFunction(undefined)); // returns empty array

console.log(filterFunction([],null)); // returns empty array
console.log(filterFunction([],undefined));    // returns empty array

console.log(filterFunction(undefined,undefined));     // returns empty array
console.log(filterFunction(undefined,null));          // returns empty array

console.log(filterFunction(null,undefined));          // returns empty array
console.log(filterFunction(null,null));               // returns empty array

