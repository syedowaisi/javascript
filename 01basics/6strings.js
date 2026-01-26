const name ="owais"
const repocount=80

// console.log(name + repocount + "hello");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName= new String('asphalt8-hc-one')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
//various methods for objects are available....
console.log(gameName.indexOf('t'));

const newstr=gameName.substring(0,4)
console.log(newstr);

const anotherstr=gameName.slice(-5,0)
console.log(anotherstr);


const str="   syed owais   "
console.log(str);
console.log(str.trim()); //remove the unwanted spaces

const url="https://syedowais.com/owais%20syed"
url.replace('%20','-')
console.log(url);

console.log(gameName.split('-'));

