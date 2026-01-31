/// generating a random color

const randomcolor=function(){
    const hex = '0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random() *16)
        color+=hex[index]
    }
    return color;
}

console.log(randomcolor());

const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

const body=document.querySelector('body')

let intervalId=null;

const changecolor=function(){
    let color=randomcolor();
    body.style.backgroundColor=color;
    console.log(color);
}

start.addEventListener('click',function(e){
    if(intervalId===null){
        intervalId=setInterval(changecolor,1000) //tracking the interval id
    }
})

stop.addEventListener('click',function(e){
    clearInterval(intervalId);

    intervalId=null;
})