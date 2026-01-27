const useremail="owais.ai"

if(useremail){
    console.log("got user email");
}else{
    console.log("don;t have user email");
}

// falsy values**************
// false, 0, -0, BigInt 0n, "", null, undefined, Nan,
//some truthy values*********
//"0", 'false', " ", [], {}, function(){},
 
if(useremail.length === 0){
    console.log("Array is empty")
}

const emptyobj={}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}
// Object.keys(emptyobj) ,it return in array form

//Nullish Coalescing Operator(??): null ,undefined

let val1;
// val1=5??10
val1=null?? 10
console.log(val1)


//terniary operator
//condition?true:false

const iceTeaPrice=101
iceTeaPrice<=80?console.log("price is less than 80"):console.log("price is greater than 80 ")