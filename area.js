const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const outputEl = document.querySelector("#output");


function isEntryPositive(){
    if(Number(base.value)>0 && Number(height.value)>0){
        calculateArea();
    }else{
        console.log("heree");
        outputEl.innerText = "You cannot enter zero or negative number";
    }
}

function calculateArea(){
    const area = 0.5 * base.value * height.value;
    outputEl.innerText = "Area of the triangle = " + area + " sq.units";
    
}

calculate.addEventListener("click", isEntryPositive); 