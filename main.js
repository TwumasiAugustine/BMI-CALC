var weight = document.getElementById("weight-el");
var height = document.getElementById("height-el");
const result = document.getElementById("result-el");
var message = document.getElementById("message-el");
const btn = document.getElementById("btn");

function onTyping() {
    weight.type = "number";
    height.type = "number";
    if(weight.value.length > 0 && height.value.length > 0) {
        document.getElementById("btn").disabled = false;
        btn.style.cursor = "pointer";
    } else if (weight.value.length > 0 || height.value.length > 0){
        document.getElementById("btn").disabled = true;
        btn.style.cursor = "not-allowed";
    }
}
onTyping();

btn.addEventListener("click", function() {
    let weightValue = weight.value;
    let heightValue = height.value;
    let convert = 10000;
    weight.value = ""
    height.value = ""
    let bmi = weightValue / heightValue**2 * convert;    
    result.textContent ="BMI: " + bmi.toFixed(2);
    if (bmi < 18.5) {
        message.style.color = "yellow";
        message.textContent = "You are Underweight!";
    }else if(bmi >= 18.5 && bmi < 24.9) {
        message.style.color = "green";
        message.textContent = "You have Normal weight!";
    }else if (bmi > 24.9 && bmi < 29.9 ){
        message.style.color = "rgba(235, 45, 45, 0.756)";
        message.textContent =  "You are Overweight!";
    }else if(bmi > 29.9){
        message.style.color = "red";
        message.textContent = "You are Obese!";
    } 
    document.getElementById("btn").disabled = true;
    btn.style.cursor = "not-allowed";
})