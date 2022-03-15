

module.exports = function flattenArray(elements, depth){
    let arr = [];
      if (elements){
        for (let index = 0; index < elements.length; index++){
            if (depth === undefined){
                depth = 1;
            }
            if (Array.isArray(elements[index]) && depth) {
                arr = arr.concat(flattenArray(elements[index], depth-1));
            }
            else{
                if(elements[index]){
                    arr.push(elements[index]);
                }
            }
            }
        return arr;
      }
    return [];
}

