//continue objects
//new object
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=true

// console.log((tinderuser));

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"syed",
            lastname:"owais"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)//combining
const obj4=Object.assign(obj1,obj2)//combining without using curly braces so it reflects to obj1 also
// console.log(obj4);
// console.log(obj1);
// console.log(obj2);
console.log(obj3);

//or
const obje3={...obj1,...obj2}
console.log(obje3);

const users=[
    {

    }
]

// users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser)); //give keys in array
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));//checking is it exist

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"md"
}

// course.courseInstructor
const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {           // this object has no name thus it's a json
//     "name":"owais",
//     "coursename":"js in english",
//     "price":"free"
// }

 [      //several users
    {},
    {}
 ]
