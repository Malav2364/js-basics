//callbacks is a function passed as an argument function and executed later
function greet(name, callback){
    console.log('Hello', name)
    callback();
}

//function passed as a argument
function sayGoodBye(){
    console.log('GoodBye!')
}

function Tata(){
    console.log('tata bye bye!')
}

greet('Alice', Tata)

//callback pitfall
//nested callbacks can make coed hard to readf this is called callback hell

setTimeout(() => {
    console.log("Step-1")
    setTimeout(() => {
        console.log('Step-2')
        setTimeout(() => {
            console.log('Step-3')
        }, 100);
    }, 100);
}, 100);