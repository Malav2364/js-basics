//create a new promise
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const success  = Math.random();
        if (success > 0.5) {
            resolve('Operation Successfully condeucted !!@!!')
        } else {
            reject('Aye Popat !!')
        }
    },200)
})

myPromise.then(result=>console.log(result)).catch(error=>console.log(error))