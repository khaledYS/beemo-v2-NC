// function to get the length of the object
export function getObjectLength(object){
    if(typeof(object) == "object"){
        var counter = 1;
        for(var i in object)
        {
            counter++;
        }
        return counter;
    }else
    {
        console.error(`${object} isnt an object`)
    }
}

export function getSelectedWord(total, part) {
    var partRegExp = new RegExp(part, "i");
    var result = total.replace(partRegExp, `<strong>${part}</strong>`);
    return result;
}