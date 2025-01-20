const car = {
    brand : 'Tesla',
    start(){
        console.log("Car is Starting...")
    }
}

car.start()


//nested object

const user = {
    u_name : 'Malav',
    u_lname : 'Patel',
    address : {
        city : 'Vadodara',
        state : 'Gujarat',
        pin : 390006 
     } 
}

console.log(user.address.pin)