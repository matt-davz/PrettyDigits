const { defaultOptions } = require("./options.cjs");
const { executeOptions, makeDivider } = require("./utils.cjs")

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions}

    const numLength = Array.from(String(num), Number).length;
    let numObj = {};

    if(num < 1000){
        numObj = {num: num.toFixed(opts.precision), unit: opts.units[0]}
        const veryPrettyObj = executeOptions(numObj,opts)
        return `${veryPrettyObj.num}${veryPrettyObj.unit}`
    }

    for (let i = 1; i < opts.units.length; i++) {
        const lowerBound = i * 3;
        const upperBound = i * 3 + 3;
        if (numLength >= lowerBound && numLength <= upperBound) {
            const divisor = makeDivider(lowerBound);
            const finalNum = num / divisor
            if(!numLength%3){
                numObj = {unit: opts.units[i], num: finalNum.toFixed(0)}
                break
            } else {
                numObj = {unit: opts.units[i], num: finalNum.toFixed(opts.percision)};
                break
            }
        }
    }
    
    const veryPrettyObj = executeOptions(numObj,opts)

    return `${veryPrettyObj.num}${veryPrettyObj.unit}`
}
console.log(prettyDigits(500.12, {precision: 1}))


module.exports = {
    prettyDigits
}
