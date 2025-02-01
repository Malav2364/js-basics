const nums = [1,2,3,4,5,6,7,8,9,10]
const squaers = nums.map(num=>num*num)
const odd = nums.filter(num=>num % 2 == 0)
const sums = nums.reduce((acc,surr) =>acc+surr,0 )
const prod2 = nums.reduce((acc,surr) =>acc*surr,1)
// console.log(squaers)
// console.log(sums)
// console.log(odd)
// console.log(prod2)

//challanges

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 40 },
    { name: "Eve", score: 70 }
]

const distinction = students.filter(studs => studs.score > 60)
const names = students.map(names => names.name)
const all = students.filter((acc, names, index)=>{
    return index == 0 ? names : acc + ',' + names 
}," ")
console.log(all)
console.log(names)
console.log(distinction)
