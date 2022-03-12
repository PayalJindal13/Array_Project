let mapFunction = require('./map.js');
module.exports = function flatten(elements){
    if (elements){
        let arr = mapFunction(elements,cb = element => {
            if (Array.isArray(element)) return cb(element[0]);
            return element;
        });
    return arr;
    }
    return [];
    }
 