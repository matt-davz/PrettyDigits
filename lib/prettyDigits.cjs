const { defaultOptions } = require("./options.cjs");
const { executeOptions, getUnitAndShorten } = require("./utils.cjs")

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} // destructuring

    
    let numObj = {num: num};

    // if(num < 0){
    //     num = 
    // }

    if(num < 1000){
        numObj = {num: num.toFixed(opts.precision), unit: opts.units[0]}
        const veryPrettyObj = executeOptions(numObj,opts)
        return `${veryPrettyObj.num}${veryPrettyObj.unit}`
    }

    numObj = getUnitAndShorten(numObj,opts) // needs to be kinked out prettyDigits tests are failing

    
    
    
    const veryPrettyObj = executeOptions(numObj,opts)

    return `${veryPrettyObj.num}${veryPrettyObj.unit}`
}
console.log(prettyDigits(1234567891, {precision: 1}))


module.exports = {
    prettyDigits
}
