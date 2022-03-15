const nestedArray = [1, [2], [[3]], [[[4]]]];
let flattenArrayElements = require('./flatten.js');

//Testcases
console.log(flattenArrayElements(nestedArray)); // returns [1, 2, 3, 4] 

console.log(flattenArrayElements( [[2], [['t']], , [[[6]]], 7]));  // returns [ 2, 't', 6 , 7 ]

console.log(flattenArrayElements([1, 2, 'hello', , [[90]]]));      // returns [ 1, 2, 5, 'hello', 90 ]

console.log(flattenArrayElements( [1, [2, ['hi']], [[[[8]]]]]));  // returns [ 1, 2, 'hi', 8 ]
