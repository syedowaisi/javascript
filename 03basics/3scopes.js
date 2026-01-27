

// console.log(a);
// console.log(b);
// console.log(c);

//var a=300
let a=300  //global scope
if(true){
    let a =10  //block scope
    const b=20
    console.log("inner:",a)
}
console.log("outer:",a) 


function one(){
    const username='owais'

    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website)

    two()
}

// console.log(one())


if(true){
    const username="owais"
    if(username==="owais"){
        const website=" youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username) can't access


//***********intersting********* */

console.log(addone(5))
function addone(value){
    return value+1
}

// addone(5)

// addtwo(5)  error hoisting since function assigning in a variable
const addtwo=function(num){  //can called expression
    return num+2
}
addtwo(5)

