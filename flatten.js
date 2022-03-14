

module.exports = function flatten(elements){
    let arr = [];
      if (elements){
        for (let index = 0; index < elements.length; index++){
            if (Array.isArray(elements[index])) {
                arr = arr.concat(flatten(elements[index]));
            }
            else{
                arr.push(elements[index]);
            }
            }
        return arr;
      }
    return [];
}

