let randomnum=parseInt(Math.random()*100 +1 );
console.log(randomnum);

const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guessesslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevguess=[]
let numguess=1

let playgame=true
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    })
}

function validateguess(guess){
    //is user enter a valid guess
    if(guess==='' || guess<1 || guess>100 ||isNaN(guess)){
        alert("your entered value is not valid , please enter a valid number" );
    }
    else{
        prevguess.push(guess);
        if(numguess===11){
            displayguess(guess);
            displayMessage(`Game Over ,random number was ${randomnum}`)
            endGame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    // check if a guess equals to the random number
    if(guess === randomnum){
        displayMessage(`Hurrah! You guessed it right`);
        endGame();
    }else if(guess < randomnum){
        displayMessage(`your guess number is too low`);
    }else if(guess > randomnum){
        displayMessage(`your guess number is too high`);
    }
}

function displayguess(guess){
    //updates the value to show
    userinput.value=" ";
    guessesslot.innerHTML += `${guess}, `;
    numguess++;
    remaining.innerHTML=`${11 - numguess}`;
}

function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    userinput.value=' ';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">Start New Game</h2>`;
    startOver.appendChild(p);
    playgame=false;
    startGame();
}

function startGame(){
    const newgamebttn=document.querySelector("#newgame");
    newgamebttn.addEventListener('click',function(e){
        randomnum=console.log(parseInt(Math.random()*100 +1 ));
        prevguess=[];
        numguess=1;
        guessesslot.innerHTML=' ';
        remaining.innerHTML=`${11 - numguess}`;
        userinput.removeAttribute('disabled');;
        startOver.removeChild(p);
        loworhi.innerHTML=' ';

        playgame=true;

    })

}







