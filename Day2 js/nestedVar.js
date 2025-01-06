function tstVar() {
    var a = 10
    if (true) {
        var a = 20
        console.log(a)//20
    }
    console.log(a)//20
}

tstVar()
//here both will print same as we change the value it accepts it everywhere


function tstLet() {
    let b = 20
    if (true) {
        let b = 10
        console.log(b) //10
    }
    console.log(b)//20
}
tstLet()
//here the output will be diierent as let variable only updates the after call value inside the scope 


function tstCon() {
    const c = 30
    console.log(c)
    // c = 25 //error as constant values can not be changed 
}

tstCon()