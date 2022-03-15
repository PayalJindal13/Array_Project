

module.exports = function flattenArray(elements){
    let arr = [];
        for (let index = 0; index < elements.length; index++){
            if (Array.isArray(elements[index])) {
                arr = arr.concat((flattenArray(elements[index])));
            }
            else{
              if(elements[index]) arr.push(elements[index]);
            }
        }
        return arr;
}



