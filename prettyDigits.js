
function prettyDigits (num,options = {}) {
    let {space,percision, units} = options;

    if(space === undefined) {
        space = true;
    }

    if(percision === undefined) {
        percision = 1;
    }

    if(units === undefined) {
        units = ['','K','M','B','T','Q']
    }

    let number = {
        num: num,
        abr: ''
    }

    let numLength = Array.from(String(number.num),Number).length

    

    switch (true) {
        case numLength > 15:
            number.abr = units[5];
            number.num = (number.num/1000000000000000).toFixed(percision)
            break;
        case numLength > 12:
            number.abr = units[4];
            number.num = (number.num/1000000000000).toFixed(percision)
            break;
        case numLength > 9:
            number.abr = units[3];
            number.num = (number.num/1000000000).toFixed(percision)
            break;
        case numLength > 6:
            number.abr = units[2];
            number.num = (number.num/1000000).toFixed(percision)
            break;
        case numLength > 3:
            number.abr = units[1];
            number.num = (number.num/1000).toFixed(percision)
            break;
        default:
            number.abr = units[0];
            break;
    }

    let final = 0;

    if(space) {
        final = `${number.num} ${number.abr}`
    } else {
        final = `${number.num}${number.abr}`
    }
   

    
    return final


}

console.log(prettyDigits(1200000,{percision: 2, space: false}))