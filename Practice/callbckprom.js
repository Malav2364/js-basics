function myProm(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Data received')
        }, 1000);
    })
}
myProm().then(res=>console.log(res)).catch(error=>error)