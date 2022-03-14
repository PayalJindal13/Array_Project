module.exports = function reduce(elements, cb, startingValue){
    if (elements && cb){
        for (let index = 0; index < elements.length; index++){
            if (startingValue) startingValue = cb(startingValue, elements[index], index, elements);
            else startingValue = cb(elements[0], elements[index], index, elements);
        }
        return startingValue;
    }
    return 0;
}