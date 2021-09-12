const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const outputEl = document.querySelector("#output");

function calculateArea(){
    const area = 0.5 * base.value * height.value;
    outputEl.innerText = "Area of the triangle = " + area + "sq.units";
    
}

calculate.addEventListener("click", calculateArea);