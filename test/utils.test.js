const {makeDivider, executeOptions} = require('../lib/utils.cjs')

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

describe('executes lowercase options',() => {
    test('lowercase is true', () => {
        expect(executeOptions({num: 100, unit: 'K'},{tolowercase: true})).toStrictEqual({num: 100, unit: 'k'})
    })
    test('lowercase is true', () => {
        expect(executeOptions({num: 100, unit: 'K'},{tolowercase: false})).toStrictEqual({num: 100, unit: 'K'})
    })
})




