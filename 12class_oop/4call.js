function SetUsername(username){
    //DB Calls
    this.username=username //this refers to the context of createuser since pass from there
    console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this,username) 
    this.email=email
    this.password=password
}

const chai=new createUser("tea","chai@google.com","123")
console.log(chai)