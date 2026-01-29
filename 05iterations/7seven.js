const mynums=[1,2,3,4,5,6,7,8,9]

// const newnum=mynums.map( (num)=> num+10 )
//map automatically returns the value ,don't need return statement

//CHAINING******************************
const newnums=mynums
.map( (num) => num*10 )
.map( (num) => num+1 )
.filter( (num) => num >= 40)

console.log(newnums)