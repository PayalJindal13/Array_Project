let executeForEach = require('./each.js');
const items = [1,2,3,4,5,5];


// Testcases
executeForEach.each(items, cb = (element, index, elements ) => {console.log(`${element} is at index ${index}`)});


executeForEach.each();        // returns empty string
executeForEach.each([]);      // returns empty string
executeForEach.each(null);    // returns empty string
executeForEach.each(undefined); // returns empty string

executeForEach.each([],null); // returns empty string
executeForEach.each([],undefined);    // returns empty string

executeForEach.each(undefined,undefined);     // returns empty string
executeForEach.each(undefined,null);          // returns empty string

executeForEach.each(null,undefined);          // returns empty string
executeForEach.each(null,null);               // returns empty string


