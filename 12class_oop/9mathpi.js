console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)
console.log(" ")
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor.value)  

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderchai:function(){
        console.log(`chai is not ready`)
    }
} 


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    writable:false,  // now property value will not change
    enumerable:false  // it hides the value
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`) 
    }
}