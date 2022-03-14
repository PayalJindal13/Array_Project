


function cb(element, depth){
    if (Array.isArray(element) && depth) {
        return cb(element[0], depth-1);
    }
    return element;
}


module.exports = function flatten(elements, depth){
    let arr=[];
      if (elements){
        for (let index = 0; index < elements.length; index++){
            arr.push(cb(elements[index], depth));
            }
        return arr;
      }
    return [];
}

