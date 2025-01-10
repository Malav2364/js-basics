//Array Methods
//Push()
//Pop()
//Shift()--> removes the first element of the array
//Unshift()--> Adds an element to the begain of the array

const animals = new Array("Cat", "Dog", "Elephant");
//unshift operation
animals.unshift("Lion");
//push operation
animals.push("Donkey");
//pop operation
animals.pop()
//shift operation
animals.shift()
//Adding more data
animals.push("Monkey");
animals.push("Donkey");
animals.push("Huskey");
animals.push("Goat");
animals.push("Cow");
// console.log(animals)

//iterating using for loop in js
for (let i = 0; i < animals.length ; i++) {    
    console.log(animals[i])
}

//using for each loop expects arrow function in parameter of it 
animals.forEach((animals)=>{
    console.log(animals)
})

//Advance array methods
//map()--> create new array by transforming each element
//filter()-->creates a new array with elements that pass a condition
//reduce()--> Reduces the arrayt to a single value 

const numbers = [11,2,3,4,5,6,7,8,9,0]

//square of numbers in Array
const squares = numbers.map((numbers)=> numbers*numbers)
console.log(squares)

//keep even numbers
const evens = numbers.filter((numbers) => numbers%2===0)
console.log(evens)

//keep odds one returns new list with new numbers
const odds = numbers.filter((numbers)=> numbers%2 !== 0)
console.log(odds)

//reduce returns single value 
const sum = numbers.reduce((acc, curr)=>acc+curr, 0)
console.log(sum)

function findLargest(arr) {
    if (arr.length == 0) {
        return 'Empty Array!'
    }
    let  largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

const arr = [10,20,30]
console.log(findLargest(arr))
