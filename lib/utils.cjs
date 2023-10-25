
function makeDivider(lowerBound) { //creates the divsor 
    let arr = [1];
    for (let i = 0; i < lowerBound; i++) {
        arr.push(0);
    }
    return Number(arr.join(''));
}

function executeOptions(obj,opts) {
    let boat = {...obj}
    
    if(opts.space){
        boat.unit =` ${boat.unit}`
    }

    if(opts.tolowercase){
        boat.unit = boat.unit.toLowerCase()
    }

    return boat
}

module.exports = {
    makeDivider,
    executeOptions
}

console.log(executeOptions({num: 1000, unit: 'K'},{space: true}))