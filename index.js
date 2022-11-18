//Import HTML elements as variables 
const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clearButton")
const endButton = document.getElementById("endButton")
const returnText = document.getElementById("returnText")
const returnDiv = document.getElementById("return")
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
const temperatureInput = document.getElementById("temperatureInput")
const distanceInput = document.getElementById("distanceInput");
const currencyInput = document.getElementById("currencyInput"); 
const weightInput = document.getElementById("weightInput"); 
const options = document.getElementsByName("conversion") //Get all possible conversion types by name 
const values = document.getElementsByName("value") //Get all units buttons by name 

getClickedID = () => { //Get ID of the selected unit and display corresponding conversion options 
    for (let i = 0; i < values.length; i++) {
        if (values[i].checked) { //If a unit is selected preset all choices to be hidden 
            var conversion = values[i].id; 
            unitChoices.style.display ="block";
            returnText.innerHTML = " "; 
            returnPrompt.style.display = 'block';
            distanceChoices.style.display ="none"; 
            weightChoices.style.display ="none"; 
            currencyChoices.style.display ="none";
            temperatureChoices.style.display ="none"; 
        }
        switch(conversion) {
            case "temperature": 
                temperatureChoices.style.display = "block"; 
                break;  
            case "distance": 
                distanceChoices.style.display = "block"; 
                break; 
            case "currency":  
                currencyChoices.style.display = "block"; 
                break; 
            case "weight":
                weightChoices.style.display = "block"; 
                break; 
        }
    }
}

getConversion = () => {
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var conversion = options[i].id; 
            return conversion; 
        }
    }
}

temperatureConversion = () => {
    for (let i = 0; i < options.length; i++) { //Return what type of conversion to do according to ID 
        if (options[i].checked) {
            var conversion = options[i].id; 
        }
        switch(conversion) {
            case "fToC": 
                returnText.innerHTML = (`${temperatureInput.value}°F is ${Number((temperatureInput.value - 32) * 5/9).toFixed(2)}°C`); 
                break;
            case "cToF":
                returnText.innerHTML = (`${temperatureInput.value}°C is ${Number((temperatureInput.value * 9/5) + 32).toFixed(2)}°F`); 
                break; 
            case "fToK": 
                returnText.innerHTML = (`${temperatureInput.value}°F is ${Number((temperatureInput.value -32) * 5/9 + 273.15).toFixed(2)}°K`); 
                break; 
            case "kToF": 
                returnText.innerHTML = (`${temperatureInput.value}°K is ${Number((temperatureInput.value-273.15) * 9/5 + 32).toFixed(2)}°F`); 
                break; 
            case "cToK": 
                returnText.innerHTML =(`${(temperatureInput.value)}°C is ${Number((+temperatureInput.value + +273.15)).toFixed(2)}°K`); 
                break; 
            case "kToC": 
                returnText.innerHTML =(`${(temperatureInput.value)}°K is ${Number((temperatureInput.value) - 273.15).toFixed(2)}°C`); 
                break; 
        }
    }
}

distanceConversion = () => {
    let conversion = getConversion();
    switch(conversion) {
        case "mToKM": 
            returnText.innerHTML = (`${distanceInput.value} miles is ${Number(distanceInput.value * 1.609344).toFixed(2)} kilometers`) 
            break; 
        case "kmToM": 
            returnText.innerHTML = (`${distanceInput.value} kilometers is ${Number(distanceInput.value / 1.609344).toFixed(2)} miles`) 
            break; 
    }
}


currencyConversion = () => {
    let conversion = getConversion();
        switch (conversion) {
            case ("usdToEUR"):
                returnText.innerHTML = (`${currencyInput.value} USD is ${Number(currencyInput.value * 0.9642321).toFixed(2)} EUR`) 
                break; 
            case "eurToUSD":
                returnText.innerHTML = (`${currencyInput.value} EUR is ${Number(currencyInput.value / 0.9642321).toFixed(2)} USD`) 
                break 
            case "usdToYEN": 
                returnText.innerHTML = (`${currencyInput.value} USD is ${Number(currencyInput.value * 138.63008).toFixed(2)} YEN`) 
                break; 
            case "eurToYEN": 
                returnText.innerHTML = (`${currencyInput.value} EUR is ${Number(currencyInput.value * 144.65463).toFixed(2)} YEN`) 
                break; 
            case "yenToUSD": 
                returnText.innerHTML = (`${currencyInput.value} YEN is ${Number(currencyInput.value / 138.63008).toFixed(2)} USD`) 
                break; 
            case "yenToEUR": 
                returnText.innerHTML = (`${currencyInput.value} YEN is ${Number(currencyInput.value / 144.65463).toFixed(2)} EUR`) 
                break; 
    }
}


weightConversion = () => {
    let conversion = getConversion();
        switch (conversion) {
            case "lbsToKG": 
                returnText.innerHTML = (`${weightInput.value} pounds is ${Number(weightInput.value / 2.205).toFixed(2)} kilograms`) 
                break; 
            case "kgToLBS": 
                returnText.innerHTML = (`${weightInput.value} kilograms is ${Number(weightInput.value * 2.205).toFixed(2)} pounds`) 
                break; 
    }
}

let convertWeight = () => {
    // const weightconverter = new weightConverter; 
    if (weightInput.value < 0 || isNaN(weightInput.value)) { //Validate input 
        resetValue(); 
        returnText.innerHTML = "Please enter a valid weight"
    }   
    else { //Run if input valid
        weightConversion(); 
    }
}

let convertTemperature = () => { 
    if (isNaN(temperatureInput.value)) {
        resetValue()
        returnText.innerHTML = "Please enter a valid temperature"
    }
    else {
    temperatureConversion(); 
    }
}

let convertDistance = () => {
    if (distanceInput.value < 0 || isNaN(distanceInput.value)) {
        resetValue()
        returnText.innerHTML = "Please enter a valid distance"
    }   
    else {
        distanceConversion(); 
    }
}

let convertCurrency = () => {
    if (currencyInput.value < 0 || isNaN(currencyInput.value)) {
        resetValue()
        returnText.innerHTML = "Please enter a valid amount"
    }   
    else {
        currencyConversion(); 
    }
}

//Performs conversion after submit button is clicked accroding to the selected unit 
submitButton.addEventListener('click', convertTemperature);
submitButton.addEventListener('click', convertDistance);
submitButton.addEventListener('click', convertWeight);
submitButton.addEventListener('click', convertCurrency);

resetValue = () => { //Removes text and resets values to default  
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            options[i].checked = false; 
        }
    }
    returnText.innerHTML = ""
    distanceInput.value = null; 
    currencyInput.value = null; 
    weightInput.value = null; 
    temperatureInput.value = null; 
}

endProgram = () => { //Clear screen and display ending message 
    document.body.innerHTML="Thanks for joining me in Conversion Central."; 
    document.body.style.fontSize = '50px'; 
    document.body.style.display = "flex"; 
    document.body.style.justifyContent = 'center'; 
    document.body.style.alignItems = "center"; 
    document.body.style.textAlign = "center"; 
    document.body.style.minHeight = "100vh"; 
    document.body.style.color = 'white';
}

//Reset all values to default state
clearButton.addEventListener('click', resetValue)

//Clear screen and display end message 
endButton.addEventListener('click', endProgram)