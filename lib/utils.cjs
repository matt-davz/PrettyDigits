


function executeOptions(numObj, opts) {
    let {space, tolowercase} = opts;
    let {num, unit} = numObj;

    if(space){
        unit = ` ${unit}`
    } 

    if(tolowercase){
        unit = unit.toLowerCase()
    }

    return {num: num, unit: unit};
}


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

module.exports = {
    getUnit,
    executeOptions,
    getShorten
}

