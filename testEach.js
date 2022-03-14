let testEach = require('./each.js');
const items = [1,2,3,4,5,5];


// Testcases
testEach.each(items, cb = (element, index, elements ) => {console.log(`${element} is at index ${index}`)});


testEach.each();        // returns empty string
testEach.each([]);      // returns empty string
testEach.each(null);    // returns empty string
testEach.each(undefined); // returns empty string

testEach.each([],null); // returns empty string
testEach.each([],undefined);    // returns empty string

testEach.each(undefined,undefined);     // returns empty string
testEach.each(undefined,null);          // returns empty string

testEach.each(null,undefined);          // returns empty string
testEach.each(null,null);               // returns empty string


