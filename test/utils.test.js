const { executeOptions, getShorten, getUnit} = require('../lib/utils.cjs')


// test('executes precision options to 10 decimal place', () => {
//     const testNum = 1234567891;
//     let expectedNum = ['1.2 B','1.23 B','1.235 B','1.2346 B','1.23457 B','1.234568 B', '1.2345679 B','1.23456789 B', '1.234567891 B'];

//     expectedNum.forEach((elm,i) => {
//         expect()
//     })
// })


//dont forget to test precision now that it is outisde of prettydigits file and in utils

describe('executes space option', () => {
    test('space option is true', () => {
        expect(executeOptions({num: 1000, unit: 'K'},{space: true})).toStrictEqual({num: 1000, unit: ' K'})
    })

    test('space option is false', () => {
        expect(executeOptions({num: 1000, unit: 'K'},{space: false})).toStrictEqual({num: 1000, unit: 'K'})
    })
}) 

describe('executes lowercase options',() => {
    test('lowercase is true', () => {
        expect(executeOptions({num: 100, unit: 'K'},{tolowercase: true})).toStrictEqual({num: 100, unit: 'k'})
    })
    test('lowercase is true', () => {
        expect(executeOptions({num: 100, unit: 'K'},{tolowercase: false})).toStrictEqual({num: 100, unit: 'K'})
    })
})


test('getUnit will give the correct unit', () => {
    const testNums = [500,Math.pow(10,3),Math.pow(10,6),Math.pow(10,9),Math.pow(10,12)];
    const expectedOutputs = ['','K','M','B','T']

    testNums.forEach((e,i) => {
        expect(getUnit(testNums[i],['','K','M','B','T'])).toBe(expectedOutputs[i])
    })
})

test('getShorten will shorten the number', () => {
    const testNums = [500,Math.pow(10,3),Math.pow(10,6),Math.pow(10,9),Math.pow(10,12)];
    const expectedOutputs = [500,1,1,1,1]

    testNums.forEach((e,i) => {
        expect(getShorten(testNums[i],['','K','M','B','T'])).toBe(expectedOutputs[i])
    })
})

