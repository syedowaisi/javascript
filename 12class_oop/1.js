// javascript and classes
// OOP
// Object
// collection of properties and methods
// toLowerCase
// why use OOP
// parts of OOP
// Object literal

// Constructor function
// Prototypes
// Classes
// Instances (new, this)
// 4 pillars
// Abstraction Encapsulation Inheritance Polymorphism 

//OOP

const user={
    username:"owais",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Get user details from database");
        console.log(`username: ${this.username}`); //this used for current context
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());

function User(username,logcount,isloggedIn){ //called constructor function
    this.username=username;
    this.logcount=logcount;
    this.isloggedIn=isloggedIn;

    this.greeting=function(){
        console.log(`hello ${this.username}`);
    }

    return this;   // it can return without writing return statement
}
const user1=new User("owais",3,true);
const user2=new User("syed",3,false);
// console.log(user1)

console.log(user1.constructor);

