import { defaultOptions } from "./options";

function prettyDigits (num,options) {

    const opts = options ? {...defaultOptions, ...options} : {...defaultOptions}

    
    function makeDivider(lowerBound) {
    let arr = [1];
    for (let i = 0; i < lowerBound; i++) {
        arr.push(0);
    }
    return Number(arr.join(''));
    }

    function getPretty(num, units) {
        const numLength = Array.from(String(num), Number).length;

        for (let i = 1; i < units.length; i++) {
            const lowerBound = i * 3;
            const upperBound = i * 3 + 3;

            if (numLength >= lowerBound && numLength <= upperBound) {
                const divisor = makeDivider(lowerBound);
                return { unit: units[i], num: num / divisor };
            }
        }
    }

    const pretty = getPretty(num,opts.units);
    console.log(pretty)
    
    function lowerCase(obj) {
        return {
            ...obj,
            unit: obj.unit.toLowerCase()
        }
    }

    function space(obj) {
        return {
            ...obj,
            unit: ' '+obj.unit
        }
    }

    function display(obj) {
        if(opt.space){
            return space(obj)
        } else {
            return(obj)
        }
    }

   
}
prettyDigits()

