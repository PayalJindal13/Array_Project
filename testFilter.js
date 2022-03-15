items = [1,2,3,4,5,5];
let filterArray = require('./filter');

//Testcases
console.log(filterArray(items,cb = (element, index, items) => {return element > 2})); // returns [3, 4, 5, 5]

console.log(filterArray());        // returns empty array
console.log(filterArray([]));      // returns empty array
console.log(filterArray(null));    // returns empty array
console.log(filterArray(undefined)); // returns empty array

console.log(filterArray([],null)); // returns empty array
console.log(filterArray([],undefined));    // returns empty array

console.log(filterArray(undefined,undefined));     // returns empty array
console.log(filterArray(undefined,null));          // returns empty array

console.log(filterArray(null,undefined));          // returns empty array
console.log(filterArray(null,null));               // returns empty array

