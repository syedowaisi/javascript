//Immediately invoked function expressions(IIFE)
 
(function chai(){//called named iife since function has name
    console.log("DB Connected")
})(); //iife--there is sometime problem from global scope due to global scope variable/pollution ,so iife is used to protect the scope from global polltuion

( () => {  //arrow func with iife
    console.log("db again connected")
} )();

( (name) => {
    console.log(`hi ${name},your appn is connected with DB`)
})("owais");
