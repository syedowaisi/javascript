// static properties

class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username:${this.username}`)
    }
    static createId(){ //static use to not give access of particular method
        return `123`
    }
}
const syed=new user("owais")
// console.log(syed.createId())

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const phone=new Teacher("lava","lava@phone.com")
console.log(phone)
phone.logme()
