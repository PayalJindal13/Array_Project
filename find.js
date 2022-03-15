module.exports = function findElementInArray(elements, cb){
    if (elements && cb){
        for (let index = 0; index < elements.length; index ++){
            if(cb(elements[index], index, elements)) return elements[index];
        }
        return undefined;
    }
    return 0;   
}