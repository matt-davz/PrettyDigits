const {makeDivider, executeOptions} = require('../lib/utils.cjs')


const numObj = {
    num: undefined,
    abr: undefined
}

const defaultOptions = {
    lowercase: false,
    precision: 1,
    space: true,
    units: [
      "",
      "K",
      "M", 
      "B", 
      "T"
    ]
};

test('gives proper divdor', () => {
    for(let i = 1; i < 5; i++){
        expect(makeDivider(3*i)).toBe(Math.pow(1000,i))
    }
})

describe('executes space option', () => {
    test('space option is true', () => {
        expect(executeOptions({num: 1000, unit: 'K'},{space: true})).toStrictEqual({num: 1000, unit: ' K'})
    })

    test('space option is false', () => {
        expect(executeOptions({num: 1000, unit: 'K'},{space: false})).toStrictEqual({num: 1000, unit: 'K'})
        
    })
}) 


