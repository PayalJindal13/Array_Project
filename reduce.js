


module.exports = function reduceArray(elements, cb, startingValue){
    if (elements && cb){

    // for defined starting value but not 0 
    if (startingValue){
            for (let index = 0; index < elements.length; index++){
                startingValue = cb(startingValue, elements[index], index, elements);
            }
        return startingValue;
        }

    // for starting value 0
    else if (startingValue === 0){
        for (let index = 0; index < elements.length; index++){
            startingValue = cb(startingValue, elements[index], index, elements);
        }
    return startingValue;
    }

    // for undefined starting value
    startingValue = elements[0];
        for (let index = 1; index < elements.length; index++){
            startingValue = cb(startingValue, elements[index], index, elements);
        }
        return startingValue;
    }
    return 0;
}
//startingValue = cb(elements[0], elements[index], index, elements);