//Promise in js means a value that may be available now later or never
//Three stages 
//pending resolved or rejected
let myPromise = new Promise((resolve, reject)=>{
    let success = true;
    if (success) {
        resolve('Done Boss!')
    }else{
        reject('Bekar Bytexl')
    }
})

myPromise.then(result=>console.log(result)).catch(error=>console.log(error))