// another way of using getter and setter in function(old way)

// const { use } = require("react")

//function based syntax

function User(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this, 'email',{
        get:function(){
            return this._email.toUpperCase() //User cannot break formatting.
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this, 'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value
        }
    })
}

// const user=new User("owaisahmad@email.com","hello123")
// console.log(user.email);

//OBJECT based syntax

const Userr={
    _emaill:"owaisjnedjen@gmail.com",
    _pass:"dsndi9e892",

    get emaill(){
        return this._emaill.toUpperCase()
    },
    set  emaill(value){
        this._emaill=value
    }
}

const hello=Object.create(Userr)
console.log(hello.emaill)