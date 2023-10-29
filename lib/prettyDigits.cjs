const { defaultOptions } = require("./options.cjs");
const { executeOptions, getShorten, getUnit } = require("./utils.cjs")


function prettyDigits (number,options) {
    let num = Number(number)
    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} 

    if(num === 0) return '0'

    if(isNaN(opts.precision)){ //throws error if Precision is NaN
        throw new TypeError('Precision is NaN!')
        
    }
    if(isNaN(num)){ // throws an error if input is NaN
        
        throw new TypeError('Input is NaN!')
        
    }

    let numObj = {} 
   
    
    if(num < 0 && num > -1){
        const positiveNum = Math.abs(num)

        if (num < 1e-6) {
            return (positiveNum*-1).toString(); // returns expression as a string
        }
    }
    if (num < 0) { // if num is negative
        const positiveNum = Math.abs(num);
       
        const shortened = getShorten(positiveNum, opts.units);
        
        numObj = {
            num: shortened * -1,
            unit: getUnit(positiveNum, opts.units)
        }
    } else if (num < 1 && num > 0) { // if really small number
        let numArr = Array.from(String(num));
        
    
        if (num < 1e-6) {
            return num.toString(); // returns expression as a string
        }
        let index = (numArr.findIndex(elm => elm > 0)) - 1; // finds the proper index for {precision} to be used.
    
        numObj = {
            num: num,
            unit: opts.units[0]
        };

        return `${numObj.num.toFixed(index + opts.precision)}${numObj.unit}`;
    } else {

        if(num >=1000) {
            numObj = {
            num: getShorten(Math.round(num), opts.units),
            unit: getUnit(Math.round(num), opts.units)
            }
        } else{
            numObj = {
                num: getShorten(num, opts.units),
                unit: getUnit(num, opts.units)
            }
        }


        
    }
    
   
    const veryPrettyObj = executeOptions(numObj,opts) //applies all options to number
    
    return `${veryPrettyObj.num.toFixed(opts.precision)}${veryPrettyObj.unit}`
}


module.exports = {
    prettyDigits
}
