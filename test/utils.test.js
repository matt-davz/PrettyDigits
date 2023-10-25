const {makeDivider, executeOptions} = require('../lib/utils.js')

test('gives proper divdor', () => {

    

    expect(makeDivider(3)).toBe(1000)

    expect(makeDivider(6)).toBe(1000000)
})