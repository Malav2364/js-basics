//let var const diff 
 //Var 
 //Can be redeclared or updated
 //Can be hoisted but are undefined

 var a = 'John Wick'
 console.log(a) //prints a 

 console.log(b)
 var b = 'Jimmy Carter' //undefined as it is declared after calling it

 var a ='Malav Patel'
 console.log(a)// the value of a is updated 


 //Let 
 //Let can not be redeclared or value can not be changed
 //hoisted but not initialized

 let m = 'Hello'
 console.log(m)
//  let m='world'
//  console.log(m)  throw error as declared again

// console.log(n)
let n = 'world' //cannot access before initializing error will be waiting for you 


//const
//cant change a constant variable
//block scoped
const  d = 120
// d = 121 not possible as we cant change a constant value
console.log(d)

// d = 121 cant assign it as we cant change constant variables

// console.log(f) //error cant access the variable before
const f = 250  


