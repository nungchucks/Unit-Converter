const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton")
const endButton = document.getElementById("endButton")
const returnText = document.getElementById("returnText")
const temperatureButton = document.getElementById("temperature")
const distanceButton = document.getElementById("distance")
const currencyButton = document.getElementById("currency")
const weightButton = document.getElementById("weight")
const conversionChoiceText = document.getElementById("conversionChoiceText")
const returnValue = document.getElementById("returnValue"); 
const unitChoices = document.getElementById("unitChoices")
const returnPrompt = document.getElementById("returnPrompt"); 
const temperatureChoices = document.getElementById("temperatureChoices"); 
const distanceChoices = document.getElementById("distanceChoices"); 
const currencyChoices = document.getElementById("currencyChoices"); 
const weightChoices = document.getElementById("weightChoices"); 
const radios = document.querySelectorAll("input[name='value']")


clearButton.addEventListener('click', () => {
    returnText.innerHTML=""; 
    returnPrompt.innerHTML =""; 
})


let findSelected = () => {
    let selected = document.querySelector('input[name="unit"]:checked')
    return (selected.id);
}

// radios.forEach(radio => {
//     radio.addEventListener('change', findSelected)
//     if (radio.id == "temperature") {
//         submitButton.addEventListener('click', temperatureConversion)
//     }
// })

function temperatureConversion() {
    submitButton.addEventListener('click', showReturnPrompt);
    submitButton.addEventListener('click', showTempConversionOptions)
    let contact = document.querySelectorAll('input[name="contract_duration"]');
    // or '.your_radio_class_name'

    for (let i = 0; i < contact.length; i++) {
        contact[i].addEventListener("change", function() {
            let textBox = document.createElement('form'); 
            textBox.innerHTML = "Enter words"
            unitChoices.append(textBox);
        });
    }
}

function distanceConversion() {
    submitButton.addEventListener('click', showReturnPrompt);
    submitButton.addEventListener('click', showDistanceConversionOptions)
    
}

function currencyConversion() {
    submitButton.addEventListener('click', showReturnPrompt);
    submitButton.addEventListener('click', showCurrencyConversionOptions)
}

function weightConversion() {
    submitButton.addEventListener('click', showReturnPrompt);
    submitButton.addEventListener('click', showWeightConversionOptions)
}

function showTemperaturePrompt() {
    distanceChoices.style.display ="none"; 
    weightChoices.style.display ="none"; 
    currencyChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    temperatureChoices.style.display = "block"; 

}

function showDistancePrompt() {
    temperatureChoices.style.display ="none"; 
    weightChoices.style.display ="none"; 
    currencyChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    distanceChoices.style.display = "block"; 

}

function showCurrencyPrompt() {
    temperatureChoices.style.display ="none"; 
    weightChoices.style.display ="none"; 
    distanceChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    currencyChoices.style.display = "block"; 

}

function showWeightPrompt() {
    temperatureChoices.style.display ="none"; 
    currencyChoices.style.display ="none"; 
    distanceChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    weightChoices.style.display = "block"; 

}

function returnConvertedValues() {

}