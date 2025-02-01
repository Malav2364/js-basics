const promise1 = new Promise((resolve, reject)=>{setTimeout(() => {resolve('Promise 1 Resolved')}, 100);})
const promise2 = new Promise((resolve, reject)=>{setTimeout(() => {resolve('promise 2 resolved')}, 1000);})
const promise3 = new Promise((resolve, reject)=>{setTimeout(() => {resolve('Promise 3 Resolved')}, 100);})

Promise.all([promise1,promise2,	promise3]).then(res=>console.log(res)).catch(error=>error);