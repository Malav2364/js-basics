// Data types
//string number boolean null undefined symbol biginit object

//all data types

let x;

console.log(typeof('Hello World'))
console.log(typeof(11))
console.log(typeof(true))
console.log(typeof(null))
console.log(typeof(x)) 
console.log(typeof(Symbol('id')))
console.log(typeof(123456789654321987n))
console.log(typeof({id : 1}))


//type conversion

console.log("5" + 5 ) //string
console.log("5" - 2  )//number

//explicit comparison
const num = Number('123456')
const str = String(123)
console.log(num, str)

//operators
//Arithmatic  Operators + - / * % // ** last one is modulo
console.log(30+20)
console.log(30-20)
console.log(30/20)
console.log(30%20)
console.log(30*20)
console.log(30**20)

//comparison Operator
 console.log(5 == '5') //loose comparison as it check the value not the  type 
 console.log(5 === '5') //tight comparions as it checks all the value 

 //logical  Operators

 console.log(true && false)
 console.log(true || false)
 console.log(!true)

 //assignment operators
 let a= 5;
 a+=2; //a = a + 2 (+2)
 a-=2; //a = a - 2 (-2)
 console.log(a) //7

 //Special Operators
 //ternary  operators
const age = 18;
const canVote = age >=18 ? "yes" :  "no";
console.log(canVote)

//type of operator

console.log(typeof('Hello')) //string
console.log(typeof(23))//number

