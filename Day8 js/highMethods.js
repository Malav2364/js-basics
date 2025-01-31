//using map reduce and filter on an array 
const nums = [1,2,3,4,5,6,7,8,9,10]
let sqnum = nums.map(num => num*num)
let even =  nums.filter(num => num % 2 == 0)
let sum = nums.reduce((acc,curr)=>acc+curr,0)
console.log(sum)
console.log(even)
console.log(sqnum)