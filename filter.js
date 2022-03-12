module.exports = function filter(elements, cb){
    let newArray = [];
    if (elements && cb){
        for (let index = 0; index < elements.length; index++){
            if(cb(elements[index])) newArray.push(elements[index]);
        }
    }
    return newArray;
}