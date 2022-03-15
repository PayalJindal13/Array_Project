let executeForEach = require('./each.js');
const items = [1,2,3,4,5,5];


// Testcases
executeForEach(items, cb = (element, index, elements ) => {console.log(`${element} is at index ${index}`)});


executeForEach();        // returns empty string
executeForEach([]);      // returns empty string
executeForEach(null);    // returns empty string
executeForEach(undefined); // returns empty string

executeForEach([],null); // returns empty string
executeForEach([],undefined);    // returns empty string

executeForEach(undefined,undefined);     // returns empty string
executeForEach(undefined,null);          // returns empty string

executeForEach(null,undefined);          // returns empty string
executeForEach(null,null);               // returns empty string


