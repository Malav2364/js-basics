function fstep(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('First Step : ',value)
            resolve(value+1);
        },1000);
    });
}

function sstep(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Second Setp :',value)
            resolve(value * 2)
        })
    })
}

function tstep(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Third Step :',value)
            resolve(value-1)
        },100)
    })
}

fstep(10).then(result=>sstep(result)).then(result=>tstep(result)).then(fres=>console.log('This is final result', fres)).catch(error=>console.log(error))