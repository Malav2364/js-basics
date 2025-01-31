function callbackfunc(a, callBack){
    return console.log(callBack(a))
}
callbackfunc(10, (x)=>x*x)

function addition(a,b,callBack){
    return console.log(callBack(a,b))
}
addition(10,20,(a,b)=>a+b)