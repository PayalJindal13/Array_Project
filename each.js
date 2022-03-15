
function executeForEachElement(elements, cb){
    if (elements && cb){
        for (let index = 0; index < elements.length; index++){
            cb(elements[index], index, elements);
        }
    }
    else{
        console.log('');
    }
}
module.exports = { each };