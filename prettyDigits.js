const defaultOptions = require('./options.js');

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
                const finalNum = num / divisor
                if(!numLength%3){
                    return {unit: units[i], num: finalNum.toFixed(0)}
                } else {
                    return { unit: units[i], num: finalNum.toFixed(opts.percision)};
                }
            }
        }
    }
    
    let pretty = getPretty(num,opts.units)
    
    
    
    const executeOptions = (obj) =>{
        let boat = {...obj}
        
        if(opts.space){
            boat = {
                ...boat,
                unit: ` ${boat.unit}`
            }
        }

        if(opts.tolowercase){
            boat = {
                ...boat,
                unit: boat.unit.toLowerCase()
            }
        }
        
        
        
        
        return boat
    }

    const veryPretty = executeOptions(pretty)

    return `${veryPretty.num}${veryPretty.unit} `
    
}

console.log(prettyDigits(125500, {percision: 1}))
