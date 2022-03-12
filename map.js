
let eachFunc = require('./each.js');

/* To avoid this for loop, each function developed earlier is used
    for (let index = 0; index < elements.length; index++){
            newElements.push(cb(elements[index]));
        }
*/

module.exports =function map(elements, cb){
    if (elements && cb){
        let newElements = [];
        eachFunc.each(elements, func = element => { newElements.push(cb(element))});  
        return newElements;
    }
    return [];
}