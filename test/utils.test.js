const { prettyDigits } = require('../lib/prettyDigits.cjs')
const { executeOptions, getShorten, getUnit} = require('../lib/utils.cjs')

describe('executes space option', () => {
    test('space option is true', () => {
        expect(executeOptions({num: 1000, unit: 'K'},{space: true})).toStrictEqual({num: 1000, unit: ' K'})
    })

    test('space option is false', () => {
        expect(executeOptions({num: 1000, unit: 'K'},{space: false})).toStrictEqual({num: 1000, unit: 'K'})
    })
}) 

describe('executes lowercase options',() => {
    test('lowercase is false', () => {
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


describe('getShorten function', () => {
    test('getShorten will shorten the number', () => {
        const testNums = [500,Math.pow(10,3),Math.pow(10,6),Math.pow(10,9),Math.pow(10,12)];
        const expectedOutputs = [500,1,1,1,1]

        testNums.forEach((e,i) => {
            expect(getShorten(testNums[i],['','K','M','B','T'])).toBe(expectedOutputs[i])
        })
    })

    test('Works on negative numbers', () => { // fix this to use getshorten function not pretty digits
        const input = -1000
        const expectedOutput = '-1 K'

        expect(prettyDigits(input)).toBe(expectedOutput);
    })


    
   

    test('should throw a TypeError if there are not enough units for the number', () => {
        expect(() => {
            getShorten(1000000, ['', 'k']);
        }).toThrow(TypeError);
    });
    
})


