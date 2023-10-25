const {makeDivider, executeOptions} = require('../lib/utils.js')

test('gives proper divdor', () => {
    for(let i = 1; i < 5; i++){
        expect(makeDivider(3*i)).toBe(Math.pow(1000,i))
    }
})