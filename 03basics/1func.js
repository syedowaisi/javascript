// console.log("O");
// console.log("w");
// console.log("a");
// console.log("i");
// console.log("s");

function saymyname(){
    console.log("O");
    console.log("w");
    console.log("a");
    console.log("i");
    console.log("s");
}

// saymyname()

function addnumbers(num1,num2){
    console.log(num1+num2)
}

const result=addnumbers(1,2)
// console.log(result);//undefined

function addnumbers(num1,num2){
    let result=num1+num2
    return result
}
const result2=addnumbers(1,2)
console.log("Result:",result2);

function loginusermessage(username ="sam"){ //giving default value
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

const message=loginusermessage("owais")
console.log(message);
console.log(loginusermessage());

