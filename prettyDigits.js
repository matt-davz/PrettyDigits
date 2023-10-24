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

    const setArr = (num) => {
        const numArr = Array.from(String(num),Number)
        const newArr = arr.filter((elm,index) => {
            return index < percision
        })
    }

    const addAbr = (num) => {
        
    }

    setArr(num)
    

    const final = 0
    
    
    
    return newArr

}

prettyDigits(1000)