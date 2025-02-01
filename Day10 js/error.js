try{
    let c = 10/0
    console.log(c) //this will handle the logic written in this block
    // console.log(varia)
} catch(error){ //if erro occurs this will handle
    console.log('Error :', error)
} finally{ //this finally block always execute  at the last
    console.log('Error bolte')
}