//types of loops 
//For loop
//for in loop
//while loop
//do while loop

//for loop
//it takes parameters as variable, condition, increment or decrement
for (let i = 1; i < 10; i++) {
    console.log(i)
}

//table printer
const tbl = 5;
for (let i = 0; i < 11 ; i++) {
    console.log(tbl*i)
}

//while loop
//runs as long as condition is true

//infite loop
// while (true) {
//     console.log()
// }

//conditional while loop
let m = 0;
while(m<2){//condition
    console.log('Greater')
    m++; //increment 
}

let k = 0;
while(k < 5){
    console.log('Hello World!')
    k++;
}

//do while loop
//executes then checks the condition

let num = 0;
do{ //execution of task 
    console.log('Heyaaaaa!')
    num++
}while(num < 5) //condition


// for  of loop used to iterate over the list 
//iterates over the object like arrays 

const fruits = ['Apples', 'Bananas', 'Pineapple', 'Orange'];

for (const i of fruits){ //just like i in range 
    console.log(i)    
}

//iterates over the properties of the objects 
const numss = {
    "availability": "yes",
        "category": "Laptop",
        "company": "AMZ",
        "discount": 15,
        "id": 131,
        "price": 1500,
        "productName": "Laptop 1",
        "rating": 4.6
};
for (const key in numss){
    console.log(`${key} ${numss[key]}`)
}

//break statement
for(let v = 0; v <= 10; v++){
    if (v===5) break; //break statement exits the loop after condition satisfaction 
    console.log(v)
}


//continue statement

for (let z = 0;z<10;z++){
    if(z>5) continue;//continue is used to continue the execution 
    console.log(`this is ${z}`)
}