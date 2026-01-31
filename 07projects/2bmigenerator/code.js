const form=document.querySelector('form')
//below line give empty value
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()//since it send data to server on submission

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');


    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`please give a valid height :${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`please give a valid weight :${weight}`;
    }else{
        const bmi=(weight/ ((height*height)/10000)).toFixed(2);//upto 2 decimal
        results.innerHTML=`<span>The BMI of given height and weight is:${bmi} </span><br>`;

        if(bmi<18.6){
            const data=document.createTextNode("Your BMI is:Under Weight");
            results.appendChild(data);
        }else if(bmi>18.6 && bmi<=24.9){
            const data=document.createTextNode("Your BMI is in normal range");
            results.appendChild(data);
        }else{
            const data=document.createTextNode("Your BMI is:overWeight");
            results.appendChild(data);
        }
    }

})