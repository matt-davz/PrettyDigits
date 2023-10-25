import { defaultOptions } from "./options.js";
import { executeOptions, makeDivider } from "./utils.cjs";

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions}

    const numLength = Array.from(String(num), Number).length;

    let numObj = {};

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

console.log(prettyDigits(12550000000, {space:false}))


