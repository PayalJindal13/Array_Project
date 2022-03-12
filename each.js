
function each(elements, cb){
    if (elements && cb){
        for (let index = 0; index < elements.length; index++){
            cb(elements[index], index);
        }
    }
    else{
        console.log('');
    }
}
module.exports = { each };