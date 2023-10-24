
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

    const numToDevide = (num) => {
        let arrLength = Array.from(String(num),Number).length
        let newArr = [1]
        for (let i = 1; i < arrLength; i++) {
            newArr.push(0)
        }
        return Number(newArr.join(''))
        
    }

    let number = {
        num: num,
        short: numToDevide(num),
        abr: ''
    }

    let numLength = Array.from(String(number.num),Number).length

    

    switch (true) {
        case numLength > 14:
            number.abr = 'Q';
            number.num = (number.num/numToDevide(number.num)).toFixed(percision)
            break;
        case numLength > 11:
            number.abr = 'T';
            number.num = (number.num/numToDevide(number.num)).toFixed(percision)
            break;
        case numLength > 8:
            number.abr = 'B';
            number.num = (number.num/numToDevide(number.num)).toFixed(percision)
            break;
        case numLength > 5:
            number.abr = 'M';
            number.num = (number.num/numToDevide(number.num)).toFixed(percision)
            break;
        case numLength > 2:
            number.abr = 'K';
            number.num = (number.num/numToDevide(number.num)).toFixed(percision)
            break;
        default:
            number.abr = '';
            break;
    }

   

    const shortenNumber = (numArr,percision) => {
        
    }



    const setArr = (num) => {
        const numArr = Array.from(String(num),Number)
        const newArr = arr.filter((elm,index) => {
            return index < percision
        })
    }

    
    return number


}

console.log(prettyDigits(125000,{percision: 2}))