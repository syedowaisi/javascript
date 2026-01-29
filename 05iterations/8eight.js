const myarr=[1,2,3,4,5]

const initialValue=0

const summation=myarr.reduce( (accumulator,currentvalue) => {
    console.log(`value of acc is ${accumulator}and currval is ${currentvalue}`)
    return accumulator+currentvalue
},initialValue)
//at first the accumulator gets the initialvalue which is mentioned and then summation 
//of accumulator and currentvalue is assigned to the accumulator
//this process continues till complete summmation..
console.log(summation)
console.log(" ")


const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"dsa course",
        price:1999
    },{
        itemname:"development course",
        price:5999
    },{
        itemname:"react course",
        price:3999
    }
]

const totalPrice=shoppingCart.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue.price
} ,0)
console.log(totalPrice)