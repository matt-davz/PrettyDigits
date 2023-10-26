let num = 0.00555

let numArr = Array.from(String(num))
let index = numArr.findIndex(elm => elm > 0)
let fixed = num.toFixed(index-1)
console.log(fixed)