const {prettyDigits} = require('../lib/prettyDigits.cjs')

test('Testing percision option to 10 decimal place', () => {
    const testNum = 1234567891;
    let expectedNum = ['1.2 B','1.23 B','1.235 B','1.2346 B','1.23457 B','1.234568 B', '1.2345679 B','1.23456789 B', '1.234567891 B']
    for(let i = 1; i <10; i++){
        expect(prettyDigits(testNum,{percision: i})).toBe(`${expectedNum[i-1]}`)
    }
    
}) 

test('Can use custom units and devisor will increase automatically', () => {
    for(let i = 1; i < 15; i++){
        const power = Math.pow(10,i*3)
        const testNum = 2*power
        const testUnits = []
        for(let j = 0; j < i; j++){
            testUnits.push(String.fromCharCode(65+i))
        }
        expect(prettyDigits(testNum,{units:testUnits}))
    }
    
})
