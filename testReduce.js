items =[1,2,3,4,5,5];
let reduceArrayElements = require('./reduce');

// Testcases
console.log(reduceArrayElements(items, cb = (startingValue, element, index, elements) => { return startingValue + element },10));  // Expects output 30
console.log(reduceArrayElements(items, cb = (startingValue, element, index, elements) => { return startingValue + element },0));  // Expects output 20
console.log(reduceArrayElements(items,  cb = (startingValue, element, index, elements) => { startingValue.push(element)
return startingValue; },[1,2]));   // Expects output 20
console.log(reduceArrayElements());        // returns 0
console.log(reduceArrayElements([]));      // returns 0
console.log(reduceArrayElements(null));    // returns 0
console.log(reduceArrayElements(undefined)); // returns 0

console.log(reduceArrayElements([],null,10)); // returns 0
console.log(reduceArrayElements([],undefined,10));    // returns 0

console.log(reduceArrayElements(undefined,undefined,10));     // returns 0
console.log(reduceArrayElements(undefined,null,10));          // returns 0

console.log(reduceArrayElements(null,undefined,10));          // returns 0
console.log(reduceArrayElements(null,null,10));               // returns 0
