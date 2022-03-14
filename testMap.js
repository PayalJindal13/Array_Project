
items = [1,2,3,4,5,5];
let mapFunction = require('./map.js');

//Testcases
console.log(mapFunction(items,cb = (element, index, elements) => { return element * element })); // returns [1, 4, 9, 16, 25, 25]

console.log(mapFunction());        // returns empty array
console.log(mapFunction([]));      // returns empty array
console.log(mapFunction(null));    // returns empty array
console.log(mapFunction(undefined)); // returns empty array

console.log(mapFunction([],null)); // returns empty array
console.log(mapFunction([],undefined));    // returns empty array

console.log(mapFunction(undefined,undefined));     // returns empty array
console.log(mapFunction(undefined,null));          // returns empty array

console.log(mapFunction(null,undefined));          // returns empty array
console.log(mapFunction(null,null));               // returns empty array
