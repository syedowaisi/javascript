// fetch('something.@gmail.com').then().catch().finally()

const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    // DB calls,cryprography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
}) 
promiseOne.then(function(){ // this func automatically gets the argument which is from above promise
    console.log('Promise Consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task2');
        resolve(); // it informs the then function to start their task when resolve is completed
    },1000)
}).then(function(){
    console.log('async2 resolved')
})


const PromiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"owais",email:"owais@gmail.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"syed",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

const username=promisefour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("the promise is either resolved or rejected"));


const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javacsript",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumepromisefive(){
    try {
        const response=await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumepromisefive()
// What are .then() and async/await?

// Both are ways to handle Promises in JavaScript.

// They do the same job, just written differently.
// aync/await
// Easier to read & debug 
// Cleaner error handling
// 🧠 Which is BEST?
// ✅ Use async / await (MOST CASES)
// Reasons:
// Cleaner code

// Better readability

// Easier debugging

// Preferred in companies


// async function getallusers( ){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error);
//     }
    
// }
// getallusers()

// OR
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));