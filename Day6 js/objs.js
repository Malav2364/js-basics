//Declaring an Object
const details = {
    name : "John",
    age : 30,
    isEmployed : true,
}

//Accessinfg Properties
console.log(details.name)

//Adding Properties
details.city = "Alberta"
console.log(details)

//Updating the Properties
details.age = 31
console.log(details)

//Deleting in the Properties
delete details.isEmployed;
console.log(details)

//Looping over the   objects

for(let key in details){
    console.log(key,details[key])
}