function Reverse(){
   const userInput= document.querySelector('.String');
    let inputstring=userInput.value;
    inputstring=inputstring.split("").reverse().join("")
    console.log(inputstring);
    document.getElementById("reverseResult").textContent = inputstring
}


function Palindrome(){
    const numberInput=document.querySelector('.inputNumber');
    var givennumber=numberInput.value;
    var length=givennumber.length;
    let flag =0;
    for(var i=0;i<length/2; i++);{
        if(givennumber[i]!=givennumber[length-1-i] ){
            flag = 1;
        }
    }

    if(flag==1){
    document.getElementById("result").textContent =`Result: it is not a palindorme`;
    }
    else{
        document.getElementById("result").textContent =`Result: it is a palindorme`;
    }
    console.log(givennumber);
}

function TipCalculator(){
    let InputTotal =parseInt(document.querySelector('.Subtotal').value);
    let InputTip =parseInt(document.querySelector('.tip').value);

    let totalAmount = InputTotal + (InputTotal*InputTip)/100;
    console.log(totalAmount);
    
    document.getElementById("answer").textContent = totalAmount;
    return totalAmount;
}