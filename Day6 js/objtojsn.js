const obj = {name:"Malav", sname : "Patel", age : 20}
const jsonstr = JSON.stringify(obj)
console.log(typeof(jsonstr))

const jsn = '{"name" : "Malav", "sname" :  "Patel"}'
const jtoo = JSON.parse(jsn)
console.log(typeof(jtoo))