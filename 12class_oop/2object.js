function multby5(num){
    return num*5;
}
multby5.power=2

console.log(multby5(5));
console.log(multby5.power);
console.log(multby5.prototype);

function CreateUser(username,score){
    this.username=username;
    this.score=score;
}
CreateUser.prototype.increment=function(){
    this.score++;
}
CreateUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`)
}

const userone=new CreateUser("chai",20)
const usertwo=new CreateUser("Tea",30)

// Internally, new does:
// ✅ Creates a new empty object
// ✅ Sets the object’s __proto__ to User.prototype
// ✅ Binds this to the new object
// ✅ Returns the new object (unless explicitly returned)

userone.printMe()

console.log(CreateUser.prototype)


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/