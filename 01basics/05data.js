//refernce type(non-primitive)
//array objects functions ,it has datatype=>function where datatype of function is objectfunction

const heros=["shaktiman", "naagraj", "jackman"];

let myobj={
    name: "owais",
    age: 20,
}

const myfunc=function(){
    console.log("Hello World");
}

// ******************memory assign**************************

// stack (used in primitive)  ,heap(used in non primitive)
//in stack we get a copy but in heap we get a reference

let myYoutubeName="syedowaisdotcom"

let anothername=myYoutubeName
anothername="chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);


let userOne={
    email:"syed@.com",
    upi:"osyedokicici",
}

let userTwo=userOne

userTwo.email="owais@.com"
console.log(userOne.email);
console.log(userTwo.email);//both have same email due to same reference in heap

