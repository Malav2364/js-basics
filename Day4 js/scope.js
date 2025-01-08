//Global Scope
let gscope = 'Hello World !'
if (true) {
    console.log(`inside scope ${gscope}`) //can be accessed here
}

console.log(`Outside ${gscope}`) //accessed here also

//local scope defined under a scope

function shw(){
    let lcvar = 'Malav Patel'
    console.log(`inside the function${lcvar}`)
}
shw()
// console.log(lcvar) //cant print cause called outside a function

//Block Scope 
if (true) {
    let cd = 'Code developer'
    console.log(cd) //blocked scope variable
}
// console.log(cd)//error 

//if used var then it sont have boundary limit for scope 
if (true) {
    var dc = 'Magic!'
    console.log(dc)//in the scope
}
console.log(dc)//var can be called outside the scope

//shadowing 
//same variable name  can be used and updated in the scope
let vr = 'Here'
function shdw() {
    let vr = 'there'
    console.log(vr)
}
shdw()
console.log(vr)

//Lexical Scope
// globals are directly used in the functions
let br = 123
function blcked(){
    console.log(br)
}
blcked()