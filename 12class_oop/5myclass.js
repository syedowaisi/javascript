//ES6
// “The constructor initializes a class instance, sets initial values, and runs setup logic when an object is created using new.”

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc` 
    }
}

const chai=new user("CHAI","chaiwow@.com","1233")

console.log(chai.encryptPassword()) 