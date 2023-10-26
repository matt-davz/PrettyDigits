const { defaultOptions } = require("./options.cjs");
const { executeOptions, getShorten, getUnit } = require("./utils.cjs")

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} // destructuring

    let numObj = {}

    if(num<0){
        const positiveNum = Math.abs(num)
        const shortened = getShorten(positiveNum,opts.units)

        numObj = {
            num: shortened * -1,
            unit: getUnit(positiveNum,opts.units)
        }
    } else {
        numObj = {
        num: getShorten(num,opts.units),
        unit: getUnit(num,opts.units)
        } 
    }
    


   
    

    

    //small number precision doesn't work
    
    
    const veryPrettyObj = executeOptions(numObj,opts)
    

    return `${veryPrettyObj.num.toFixed(opts.precision)}${veryPrettyObj.unit}`
}
console.log(prettyDigits(-1000))


module.exports = {
    prettyDigits
}
