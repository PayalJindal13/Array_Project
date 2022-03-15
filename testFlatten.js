const nestedArray = [1, [2], [[3]], [[[4]]]];
let flattenArrayElements = require('./flatten.js');

//Testcases
console.log(flattenArrayElements(nestedArray, 3)); // returns [1, 2, 3, 4] 

console.log(flattenArrayElements( [[2], [['t']], , [[[6]]], 7], 2));  // returns [ 2, 't', [ 6 ], 7 ]

console.log(flattenArrayElements([1, 2, 'hello', , [90]]));      // returns [ 1, 2, 5, 'hello', 90 ]

console.log(flattenArrayElements( [1, [2, ['hi']], [[[[8]]]]], 4));  // returns [ 1, 2, 'hi', 8 ]

console.log(flattenArrayElements());        // returns empty array 
console.log(flattenArrayElements([]));      // returns empty array
console.log(flattenArrayElements(null));    // returns empty array
console.log(flattenArrayElements(undefined)); // returns empty array
