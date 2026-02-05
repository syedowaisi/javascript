let myheros=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.owais=function(){ //this object prototype will be available in all objects
    console.log(`owais is present in all objects`)
}  
// heropower.owais()

myheros.owais()

//now defining array prototype which will not available in upper level gloabl Object
Array.prototype.syed=function(){
    console.log(`say hello`);
}
myheros.syed()


//INHERIANCE
const User={
    name:"chai",
    email:"chai@google.com"
}

const teacher={
    makeVedio:true
}

const teachingSupport={
    isavailable:false
}

const TAsupport={
    makeassignment:'JS assignment',
    fulltime:true,
    __proto__:teachingSupport
}

teacher.__proto__=User


// __proto__ is a hidden internal reference that points to an object’s prototype.
// In simple words:
// __proto__ tells JavaScript where to look if a property or method is not found on the object itself.

//OR
Object.setPrototypeOf(teachingSupport,teacher)

let anotheruser ="chaiaurcode        "

String.prototype.truelength=function(){
    console.log(`this`)
    console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`);
}
anotheruser.truelength()