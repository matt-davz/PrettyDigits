const {prettyDigits} = require('../lib/prettyDigits.cjs')

test('Testing percision option to 10 decimal place', () => {
    const testNum = 1234567891;
    let expectedNum = ['1.2 B','1.23 B','1.235 B','1.2346 B','1.23457 B','1.234568 B', '1.2345679 B','1.23456789 B', '1.234567891 B']
    for(let i = 1; i <10; i++){
        expect(prettyDigits(testNum,{percision: i})).toBe(`${expectedNum[i-1]}`)
    }
    
}) 

test('Can use custom units and devisor will increase automatically', () => {
    const testNums = [Math.pow(10,3),Math.pow(10,6),Math.pow(10,9),Math.pow(10,12),Math.pow(10,15),Math.pow(10,18)];
    const testUnits = ['','b','kb','mb','gb','tb','pb']
    const expectedOutputs = ['1 b','1 kb','1 mb','1 gb','1 tb','1 pb']

    for(let i = 0; i < testNums.length; i++){
        expect(prettyDigits(testNums[i],{units: testUnits})).toBe(expectedOutputs[i])
    }
})
