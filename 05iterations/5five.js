const coding=["js","ruby","python","cpp"]

coding.forEach( function (val){
    // console.log(val);
} )

console.log(" ")

coding.forEach( (val)=>{
    // console.log(val);
} )

console.log(" ")

function printme(item){
    console.log(item)
}
// coding.forEach(printme)

coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
} )


const mycoding=[
    {
        langname:"javascript",
        langfilename:"js"
    },
    {
        langname:"c++",
        langfilename:"cpp"
    },
    {
        langname:"java",
        langfilename:"jv"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.langname);
} )