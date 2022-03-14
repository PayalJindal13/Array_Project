
let eachFunc = require('./each.js');


module.exports =function map(elements, cb){
    if (elements && cb){
        let newElements = [];
        eachFunc.each(elements, func = (element, index, elements) => { 
            newElements.push(cb(element, index, elements))
        });  
        return newElements;
    }
    return [];
}