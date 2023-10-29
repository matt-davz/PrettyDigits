const { defaultOptions } = require("./options.cjs");
const { executeOptions, getShorten, getUnit } = require("./utils.cjs")
function findTrailingZerosIndex(number) {
    const numberStr = String(number);
    let index = numberStr.length - 1;
  
    while (index >= 0 && numberStr[index] === '0') {
      index--;
    }
  
    return index;
  }

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions} 

    

    if(isNaN(opts.precision)){ //throws error if Precision is NaN
        throw new TypeError('Precision is NaN!')
        return 'N/A'
    }
    if(isNaN(num)){ // throws an error if input is NaN
        
        throw new TypeError('Input is NaN!')
        return 'N/A'
    }

    let numObj = {} 
   
    // if(num < 1 && num > 0){ // if really small number //-------------------------------------------------CHANGE IFS SO THAT NUM < 0 GOES FIRST----------------------------------------------------//
    //     let numArr = Array.from(String(num))
    //     let numLegnth = String(num).length
        
    //     if(num < 1e-6) {return num.toString()} //returns expression as a string
    //     let index = (numArr.findIndex(elm => elm > 0)) -1  //finds the proper index for {precision} to be used.
    
    //     numObj = {
    //         num: num,
    //         unit: opts.units[0]
    //     }
    //     return `${numObj.num.toFixed(index + opts.precision)}${numObj.unit}`
    // } else if(num<0){ //if num is negative
    //     const positiveNum = Math.abs(num)
    //     const shortened = getShorten(positiveNum,opts.units)

    //     numObj = {// if the number is a negative
    //         num: shortened * -1,
    //         unit: getUnit(positiveNum,opts.units)
    //     }
    // } else {
    //     numObj = {
    //     num: getShorten(num,opts.units),
    //     unit: getUnit(num,opts.units)
    //     } 
    // }
    if(num < 0 && num > -1){
        const positiveNum = Math.abs(num)

        if (num < 1e-6) {
            return (positiveNum*-1).toString(); // returns expression as a string
        }
    }
    if (num < 0) { // if num is negative
        const positiveNum = Math.abs(num);
        console.log(`positiveNum ${positiveNum}`)
        const shortened = getShorten(positiveNum, opts.units);
        console.log(`shortened ${shortened}`)
        numObj = {
            num: shortened * -1,
            unit: getUnit(positiveNum, opts.units)
        }
    } else if (num < 1 && num > 0) { // if really small number
        let numArr = Array.from(String(num));
        let numLength = String(num).length;
    
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
        numObj = {
            num: getShorten(Math.round(num), opts.units),
            unit: getUnit(Math.round(num), opts.units)
        }
    }
    
   
    const veryPrettyObj = executeOptions(numObj,opts) //applies all options to number

    return `${veryPrettyObj.num.toFixed(opts.precision)}${veryPrettyObj.unit}`
}

console.log(prettyDigits(34458.87833481904))


module.exports = {
    prettyDigits
}
