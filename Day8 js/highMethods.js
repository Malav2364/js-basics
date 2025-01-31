//using map reduce and filter on an array 
const nums = [1,2,3,4,5]
let sqnum = nums.map(num => num*num)
let even =  nums.filter(num => num % 2 == 0)
let sum = nums.reduce((acc,curr)=>acc+curr,0)
let gtfive = nums.filter(num=> num > 3)
let product = nums.reduce((acc, curr)=> acc*curr, 1)
console.log(product)
console.log(gtfive)
console.log(sum)
console.log(even)
console.log(sqnum)