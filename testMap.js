
items = [1,2,3,4,5,5];
let mapArrayElements = require('./map.js');

//Testcases
console.log(mapArrayElements(items,cb = (element, index, elements) => { return element * element })); // returns [1, 4, 9, 16, 25, 25]

console.log(mapArrayElements());        // returns empty array
console.log(mapArrayElements([]));      // returns empty array
console.log(mapArrayElements(null));    // returns empty array
console.log(mapArrayElements(undefined)); // returns empty array

console.log(mapArrayElements([],null)); // returns empty array
console.log(mapArrayElements([],undefined));    // returns empty array

console.log(mapArrayElements(undefined,undefined));     // returns empty array
console.log(mapArrayElements(undefined,null));          // returns empty array

console.log(mapArrayElements(null,undefined));          // returns empty array
console.log(mapArrayElements(null,null));               // returns empty array
