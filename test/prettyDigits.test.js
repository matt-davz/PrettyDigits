const {prettyDigits} = require('../lib/prettyDigits.cjs')

test('Testing percision option to 10 decimal place', () => {
    const testNum = 1234567891;
    let expectedNum = ['1.2 B','1.23 B','1.235 B','1.2346 B','1.23457 B','1.234568 B', '1.2345679 B','1.23456789 B', '1.234567891 B']
    for(let i = 0; i < expectedNum.length; i++){
        expect(prettyDigits(testNum,{precision: i})).toBe(`${expectedNum[0]}`)
    }
    
}) 

test('Can use custom units and devisor will increase automatically', () => {
    const testNums = [Math.pow(10,3),Math.pow(10,6),Math.pow(10,9),Math.pow(10,12),Math.pow(10,15),Math.pow(10,18)];
    const testUnits = ['','b','kb','mb','gb','tb','pb']
    const expectedOutputs = ['1 b','1 kb','1 mb','1 gb','1 tb','1 pb']

    testNums.forEach((elm,i) => {
        expect(prettyDigits(testNums[i],{units: testUnits})).toBe(expectedOutputs[i])
    })
  
})

describe('testing numbers under 100', () => {
    test('still have precision work with their decimals', () => {
        const testNums = [500,500.12,500.12,10.005]
        const testOptions = [{precision: 0},{precision: 1},{precision: 2},{precision: 3}]
        const expectedOutputs = ['500 ','500.1 ','500.12 ','10.005 ']
        
        testNums.forEach((elm,i) => {
            expect(prettyDigits(testNums[i],testOptions[i])).toBe(expectedOutputs[i])
        })
    })

    test('still work with custom units', () => {
        const testNums = [300,999,1,10.5];
        const testUnits = ['b'];
        const expectedOutputs = ['300 b','999 b','1 b','11 b'];

        testNums.forEach((elm,i) => {
            expect(prettyDigits(testNums[i],{units: testUnits})).toBe(expectedOutputs[i])
        })

    }) 
})

test('negative numbers work', () => {
    const testNums = [-100,-1000,-1,Math.pow(-10,6),Math.pow(-10,9)];
    const expectedOutputs = ['-100 ','-1 K','-1 ','-1 M','-1 B'];

    testNums.forEach((e,i) => {
        expect(prettyDigits(testNums[i])).toBe(expectedOutputs[i])
    })
})


