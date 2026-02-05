// GETTER AND SETTER

// const { use } = require("react")

// constructor → setter → _email

class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get password(){// name assign should be same as property name which was define in constructor
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value;
    }
}

const owais=new User("owaisgm1708","haddi123")
console.log(owais.password)
console.log(owais.email)


// set email(value) {
//     this.email = value; // ❌ infinite loop
// }
// It would call the setter again and again.

// So we store the real value in a backing field:
// this._email

// 🔹 Why use setter at all if constructor assigns value?
// Because constructor runs only once, but setter runs every time the value changes.