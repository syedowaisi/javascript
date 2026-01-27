const user={
    username:"owais",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="syed"
// user.welcomeMessage()

// function chai(){
//     console.log(this)
// }
// chai()

// const chai = function(){
//     console.log(this.username)
// }

const chai = () => { //called arrow function
    console.log(this)
}
// chai()


const addtwo=(num1,num2) => {
    return num1+num2
}

const addtwoo=(num1,num2) => num1+num2 //implicit return

const addtwo_=(num1,num2) => (num1+num2) //since parantheses so no need of return keyword
console.log(addtwo(2,2))