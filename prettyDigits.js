
function prettyDigits (num,options = {}) {
    let {space,percision,units,lowerCase} = options;

    if(space === undefined) {
        space = true;
    }

    if(percision === undefined) {
        percision = 1;
    }

    if(lowerCase === undefined) {
        lowerCase = false;
    }

    if(units === undefined) {
        units = ['','K','M','B','T']
    }

    let number = {
        num: num,
        abr: ''
    }

    let numLength = Array.from(String(number.num),Number).length


    switch (true) {
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

    if (number.num <= 100) {
        number.num = Math.round(number.num);
    }

    if (lowerCase) {
        number.abr = number.abr.toLowerCase();
    }

    if(space) {
        return `${number.num} ${number.abr}`
    } else {
        return `${number.num}${number.abr}`
    }
   
}

console.log(prettyDigits(100000, {space: false}))