// for of loop

["","",""]
[{},{},{}]

const arr=[1,2,3,4]

for (const num of arr){
    // console.log(num);
}

greetings=["hello","good","yes"]
for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}

//maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"France")
console.log(map)
//maps are iterable
for(const [key,value] of map){
    console.log(key,':',value)
}

const myobject={
    'Game1':'NFS',
    'Game2':'8bp'
}

// for(const [key,value] of myobject){
//     console.log(key,':',vaue)
// }   object are not iterable this way