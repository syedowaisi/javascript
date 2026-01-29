const myobject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}
//iterating on object
for (const key in myobject) {
    console.log(`${key} shortcut for ${myobject[key]}`);
}

const programming=["js","python","java"]
for (const key in programming) {
    console.log(programming[key])
    
}