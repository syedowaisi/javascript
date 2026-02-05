class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`${this.username} logged in!`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // no need of passing (this) in this way
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`new course is added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")

chai.addcourse()
const masalachai=new Teacher("masala")

masalachai.addcourse()
masalachai.logMe()


console.log(chai===masalachai)
console.log(chai instanceof Teacher)