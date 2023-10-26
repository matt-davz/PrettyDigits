const { defaultOptions } = require("./options.cjs");
const { executeOptions, getShorten, getUnit } = require("./utils.cjs")

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} 

    if(isNaN(opts.precision)){ //throws error if Precision is NaN
        throw new TypeError('Precision is NaN!')
    }
    if(isNaN(num)){ // throws an error if input is NaN
        throw new TypeError('Input is NaN!')
    }

    let numObj = {}

    if(num < 1 && num > 0){ // if really small number
        let numArr = Array.from(String(num))
        let index = (numArr.findIndex(elm => elm > 0)) - 1 //finds the proper index for {precision} to be used.
       
        numObj = {
            num: num,
            unit: opts.units[0]
        }
        
        return `${numObj.num.toFixed(opts.precision + index)}${numObj.unit}`
    } else if(num<0){ //if num is negative
        const positiveNum = Math.abs(num)
        const shortened = getShorten(positiveNum,opts.units)

        numObj = {// if the number is a negative
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

console.log(prettyDigits(-1250,{precision: 2}))
module.exports = {
    prettyDigits
}
