const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const output1 = document.querySelector("#output")



function isEntryPositive(){
    if(Number(inputs[0].value)>0 && Number(inputs[1].value)>0 && Number(inputs[2].value)>0){
        isTriangle();
    }else{
        console.log("heree");
        output1.innerText = "You cannot enter zero or negative number";
    }
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    
    if(sumOfAngles === 180){
        output1.innerText = "Yay, It is a triangle!";
        console.log("Yay, it is a triangle");
    } else{
        output1.innerText = "Uh Oh! It is not a triangle :(";
    }
}


function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles;
}



isTriangleButton.addEventListener("click", isEntryPositive);