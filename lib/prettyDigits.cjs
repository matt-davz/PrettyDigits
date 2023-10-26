const { defaultOptions } = require("./options.cjs");
const { executeOptions, getShorten, getUnit } = require("./utils.cjs")

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} // destructuring

    let numObj = {}
    if(isNaN(num)){
        throw new TypeError('Input is not a number!')
    }
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
    
    const veryPrettyObj = executeOptions(numObj,opts) //applies all options to number
    
    return `${veryPrettyObj.num.toFixed(opts.precision)}${veryPrettyObj.unit}`
}


module.exports = {
    prettyDigits
}
