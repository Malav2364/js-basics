//Higher order functions
function operation(type){
    if (type == 'add') {
        return (a,b) => a+b
    }else if(type == 'sub'){
        return (a,b)=>a-b
    }else if(type == 'multiply'){
        return (a,b)=>a*b
    }
}

const func  = operation('sub')
console.log(func(10,75))