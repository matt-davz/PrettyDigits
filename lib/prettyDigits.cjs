const { defaultOptions } = require("./options.cjs");
const { executeOptions, getShorten, getUnit } = require("./utils.cjs")

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} // destructuring

    
    let numObj = {
        num: getShorten(num,opts.units),
        unit: getUnit(num,opts.units)
    }

   
    

    

    //small number precision doesn't work
    
    
    const veryPrettyObj = executeOptions(numObj,opts)

    return `${veryPrettyObj.num.toFixed(opts.precision)}${veryPrettyObj.unit}`
}
console.log(prettyDigits(10005,{precision: 0, tolowercase: true}))


module.exports = {
    prettyDigits
}
