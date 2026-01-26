let mydate= new Date() //date is a object
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());

let createddate=new Date(2024,0,24)
let mycreateddate=new Date(2024,0,24,5,4)
console.log(createddate.toString());
console.log(createddate.toLocaleString());

console.log(mycreateddate.toLocaleString());

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());//starts from 0(jan)
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    hour: "2-digit",
    minute: "2-digit"
})




