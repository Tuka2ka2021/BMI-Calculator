//Declare const
const FIRST_NAME = document.querySelector("#firstName");
const LAST_NAME = document.querySelector("#secondName");
const CLIENT_WEIGHT = document.querySelector("#weight");
const CLIENT_HEIGHT  = document.querySelector("#height");
const CLIENT_RESULT  = document.querySelector(".result");
const CALC_BMI_BTN = document.querySelector(".btn");

// Add an event listener to the button
CALC_BMI_BTN.addEventListener("click", () =>{
    const FIRST_NAME = document.querySelector("#firstName");
    const LAST_NAME = document.querySelector("#secondName");
    const CLIENT_WEIGHT = document.querySelector("#weight");
    const CLIENT_HEIGHT  = document.querySelector("#height");
    const CLIENT_RESULT  = document.querySelector(".result");

    // ARITHMETIC OPERATION
    let BMI = (CLIENT_WEIGHT.value) / (CLIENT_HEIGHT.value**2);

    //Let us set the BMI value to two decimal places
    BMI = BMI.toFixed(2);

if (FIRST_NAME.value=="" || LAST_NAME.value=="" || CLIENT_HEIGHT.value=="" || CLIENT_WEIGHT.value=="") {
    setTimeout(() => {
        CLIENT_RESULT.textContent = "please fill all fields correctly";
        CLIENT_RESULT.style.color = "red";
        CLIENT_RESULT.style.fontStylye = "italic";
        setTimeout(() => {
            CLIENT_RESULT.textContent ="";
        }, 1500);
    }, 100);
} else {
    CLIENT_RESULT.textContent= `${FIRST_NAME.value} ${LAST_NAME.value} Your BMI value is ${BMI}kg/m. Thank you for using this app.`;
    CLIENT_RESULT.style.color = "black";
    CLIENT_RESULT.style.fontStylye = "normal";
    init();
}
});



function init () {
    FIRST_NAME.value ="";
    LAST_NAME.value ="";
    CLIENT_HEIGHT.value ="";
    CLIENT_WEIGHT.value ="";
}