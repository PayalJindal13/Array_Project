
let eachFunc = require('./each.js');


module.exports =function mapArray(elements, cb){
    if (elements && cb){
        let newElements = [];
        eachFunc(elements, func = (element, index, elements) => { 
            newElements.push(cb(element, index, elements))
        });  
        return newElements;
    }
    return [];
}