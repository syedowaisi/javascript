function calculatecartPrice(val1,val2,...num1){//rest/spread operator
    return num1
}

console.log(calculatecartPrice(100,200,300,400));

const user={
    username:"owais",
    price:399
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
    
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const mynewarray=[200,400,100,600]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray))

