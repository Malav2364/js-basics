//Control Flow statements

//if else in js
//executes the code  on a condition
if(true){
    console.log(123)
}

//if condition executes on condition satisfaction 
//else is executed vice versa of if
let age = 18;
if(age >= 18){
    console.log('You can Vote !')
}else{
    console.log('Cant Vote')
}

//nested if else statemeent
let a = 10;
let b = 20;
let c = 30;

//else if is used to give another conditon upon the else condition
if(a>b&c){
    console.log(a)
}else if(b>a&c){
    console.log(b)
}else{
    console.log(c)
}

//switch case 
//switch case is the cleaner way to handle multiple cases or condition

let day  = 5;
switch(day){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    default :
        console.log('Sunday')
        break;
}

//default case is the case where it shows the default value




