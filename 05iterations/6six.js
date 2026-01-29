const coding=["python","c++","java","ruby","js"]

const values=coding.forEach( (item)=>{
    // console.log(item);
    return item//thus foreach doen't returnn a value
} )
console.log(values);


const mynums=[1,2,3,4,5,6,7,8,9,10]

const nums=mynums.filter( (item)=> {
    return item>5
})
console.log(nums)

console.log(" ")

const newnums=[]
mynums.forEach( (num)=> {
    if(num>5){
        newnums.push(num)
    }
})
console.log(newnums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks=books.filter( (bk)=> {
    return bk.genre ==='History'
}  )
console.log(userbooks);
console.log(" ")
console.log(" ")


const publish=books.filter( (bk)=> bk.publish>2000 )
console.log(publish)  