module.exports = function filterArrayElements(elements, cb){
    let newArray = [];
    if (elements && cb){
        for (let index = 0; index < elements.length; index++){
            if(cb(elements[index], index, elements)) newArray.push(elements[index]);
        }
    }
    return newArray;
}