const {prettyDigits} = require('../lib/prettyDigits.cjs')

test('Testing percision option to 10 decimal place', () => {
    const testNum = 1234567891;
    let expectedNum = ['1 B','1.2 B','1.23 B','1.235 B','1.2346 B','1.23457 B', '1.234568 B','1.2345679 B', '1.23456789 B']
    for(let i = 0; i < expectedNum.length; i++){
        expect(prettyDigits(testNum,{precision: i})).toBe(`${expectedNum[i]}`)
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
        expect(prettyDigits(300,{units: ['b']})).toBe('300 b')

    }) 
})


describe('testing really small numbers', () => {
    const testNum = 0.05555;

    test('precision 0', () => {
        expect(prettyDigits(testNum)).toBe('0.06')
    })

    test('precision 1', () => {
        expect(prettyDigits(testNum,{precision:1})).toBe('0.056')
    })

    test('shows scientific notion for numbers lower than to 1e-7', () => {
        expect(prettyDigits(0.0000005)).toBe('5e-7')
    })

    test('shows decimal place for nums lower than 1e-7', () => {
        expect(prettyDigits(0.000000067)).toBe('6.7e-8')
    })

    test('negative small numbers', () => {
        expect(prettyDigits(-0.005, {sciNotion: false})).toBe('-0.005') ///////testttss
    })

    test('negative numbers under 1e-7', () => {
        expect(prettyDigits(-0.00000067)).toBe('-6.7e-7')
    })

})


test('throw an error if NaN and returns N/A string', () => {
    expect(() => {
        prettyDigits('j');
    }).toThrow(TypeError) && expect(() => {
        prettyDigits('j');
    }).toBe('N/A') ;
});

test('throw an error if precision is NaN and returns N/A string', () => {
    expect(() => {
        prettyDigits(1000,{precision: 'u'});
    }).toThrow(TypeError) && expect(() => {
        prettyDigits(1000,{precision: 'u'});
    }).toBe('N/A')
});



