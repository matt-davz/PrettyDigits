


function executeOptions(numObj,opts) {
    
    if(opts.space){
        numObj.unit =` ${numObj.unit}`
    }

    if(opts.tolowercase){
        numObj.unit = numObj.unit.toLowerCase()
    }

    if(opts.precision){
        numObj.num = numObj.num.toFixed(opts.precision) //can do num.tofixed instead of num = num.tofixed try
    }

    return numObj
}
//dont forget to test precision now that it is outisde of prettydigits file and in utils

function getUnit(num, units) {
    let unit = units[0]

    units.forEach((e,i) => {
        if (num >= Math.pow(10, i * 3) && num <= Math.pow(10, i * 3 + 3)) {
            unit = units[i]
        } 
    });
    
    return unit
}


function getShorten(num,units){
    let shortened 
    for (let i = 0; i < units.length; i++) {
        if (num >= Math.pow(10, i * 3) && num <= Math.pow(10, i * 3 + 3)) {
            shortened = num / Math.pow(10,i*3)
        } 
    }
    return shortened
}

console.log(`returned ${getUnit(1000,['','K','M','B','T'])}`)

module.exports = {
    getUnit,
    executeOptions,
    getShorten
}

