var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var incremento = window.document.getElementById("incremento");
incremento.addEventListener("click", increment);
var decremento = window.document.getElementById("decremento");
decremento.addEventListener("click", decrement);


function decrement() {    
    if(currentNumber>=-2){
        currentNumber = currentNumber-1;
        currentNumberWrapper.innerHTML = currentNumber;
    }    
    if(currentNumber<0){
        currentNumberWrapper.style.color = "red";
    }
    if(currentNumber==0){
        currentNumberWrapper.style.color = "white";
    }
    
}
function increment() {    
    if(currentNumber<=2){
        currentNumber = currentNumber+1;
        currentNumberWrapper.innerHTML = currentNumber;
    }    
    if(currentNumber>0){
        currentNumberWrapper.style.color = "green";
    }
    if(currentNumber==0){
        currentNumberWrapper.style.color = "white";
    }
}
