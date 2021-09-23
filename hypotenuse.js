const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function areSidesPositive(){
    if(Number(sides[0].value)>0 && Number(sides[1].value)>0){
        calcHypotenuse();
    }else{
        console.log("heree");
        outputEl.innerText = "You cannot enter zero or negative number";
    }
}

function calcSumOfSquares(a, b){
    const sumOfSquares = (a*a) + (b*b);
    return sumOfSquares
}


function calcHypotenuse(){
    sumOfSquares = calcSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const hypotenuseLength = Math.sqrt(sumOfSquares);
    

    outputEl.innerText = "The length of hypotenuse is : " + hypotenuseLength;
}

hypotenuseBtn.addEventListener("click", areSidesPositive);