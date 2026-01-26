//contructor=>singleton \\ literals
//object literals

const mysym=Symbol("key1")

const Jsuser={
    name:"Owais",
    age:19,
    [mysym]:"mykey1", //it's a symbol
    locaton:"Unnao",
    email:"owais@google.com",
    isLoggedIn:true,
    LastLoginDays:["monday","sunday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym]);
console.log(typeof Jsuser[mysym]);

Jsuser.email="syed@google.com"
// Object.freeze(Jsuser) //since freeze now it will not change
Jsuser.email="owais@google.com"
console.log(Jsuser.email);

// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hello jsuser");
}

Jsuser.greetingtwo=function(){
    console.log(`hello jsuser,${this.name}`);
}

console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());


