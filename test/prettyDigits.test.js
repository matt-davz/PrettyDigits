const {prettyDigits} = require('../lib/prettyDigits.cjs')

test('Testing percision option to 10 decimal place', () => {
    expect(prettyDigits(1234567,{percision: 1})).toBe('1.2 M')
}) 