// function valAge(age){
//     if(age >=18){
//         console.log('Can Vote')
//     }else{
//         console.log('Cant Vote')
//     }
// }

//custom error generaton

function valAge(age){
    if(age < 18){
        throw new Error('You are not eligible to vote!')
    }
    return 'You are eligible af'
}
valAge(5)