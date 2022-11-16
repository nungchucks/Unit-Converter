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
let converter; let converted; 
var options = document.getElementsByName("conversion")
returnPrompt.style.display = 'none';

let findSelected = () => {
    let selected = document.querySelector('input[name="unit"]:checked')
    return (selected.id);
}

function showTemperaturePrompt() {
    distanceChoices.style.display ="none"; 
    weightChoices.style.display ="none"; 
    currencyChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    returnText.innerHTML = " "; 
    returnPrompt.style.display = 'block';

    temperatureChoices.style.display = "block"; 
}

function showDistancePrompt() {
    temperatureChoices.style.display ="none"; 
    weightChoices.style.display ="none"; 
    currencyChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    distanceChoices.style.display = "block"; 
    returnText.innerHTML = " "; 
    returnPrompt.style.display = 'block';

}

function showCurrencyPrompt() {
    temperatureChoices.style.display ="none"; 
    weightChoices.style.display ="none"; 
    distanceChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    currencyChoices.style.display = "block"; 
    returnText.innerHTML = " "; 
    returnPrompt.style.display = 'block';

}

function showWeightPrompt() {
    temperatureChoices.style.display ="none"; 
    currencyChoices.style.display ="none"; 
    distanceChoices.style.display ="none"; 
    unitChoices.style.display ="block";
    weightChoices.style.display = "block"; 
    returnText.innerHTML = " "; 
    returnPrompt.style.display = 'block';

}
class temperatorConverter {
    constructor() {
        this.temperature = temperatureInput.value; 
    }
    convert() {
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                var conversion = options[i].id; 
            }
            converter = Number(temperatureInput); 
            if (conversion === "fToC") {
                returnText.innerHTML = (`${temperatureInput.value} °F is ${Number((temperatureInput.value - 32) * 5/9).toFixed(2)} °C`); 
            }
            else if (conversion === "cToF") {
                returnText.innerHTML = (`${temperatureInput.value} °C is ${Number((temperatureInput.value * 9/5) + 32).toFixed(2)} °F`); 
            }
            else if (conversion === "fToK") {
                returnText.innerHTML = (`${temperatureInput.value} °F is ${Number((temperatureInput.value -32) * 5/9 + 273.15).toFixed(2)} °K`); 
            }
            else if (conversion === "kToF") {
                returnText.innerHTML = (`${temperatureInput.value} °K is ${Number((temperatureInput.value-273.15) * 9/5 + 32).toFixed(2)} °F`); 
            }
            else if (conversion === "cToK") {
                returnText.innerHTML =(`${(temperatureInput.value)} °C is ${Number((+temperatureInput.value + +273.15)).toFixed(2)} °K`); 
            }
            else if (conversion === "kToC") {
                returnText.innerHTML =(`${(temperatureInput.value)} °K is ${Number((temperatureInput.value) - 273.15).toFixed(2)} °C`); 
            }
        }
    }
}

class distanceConverter {
    constructor() {
        this.distance = distanceInput.value; 
    }
    convert() {
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                var conversion = options[i].id; 
            }
            if (conversion === "mToKM") {
                returnText.innerHTML = (`${distanceInput.value} miles is ${Number(distanceInput.value * 1.609344).toFixed(2)} kilometers`) 
            }
            else if (conversion === "kmToM") {
                returnText.innerHTML = (`${distanceInput.value} kilometers is ${Number(distanceInput.value / 1.609344).toFixed(2)} miles`) 
            }
        }
    }
}

class currencyConverter {
    constructor() {
        this.currency = currencyInput.value; 
    }
    convert() {
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                var conversion = options[i].id; 
            }
            if (conversion === "usdToEUR") {
                returnText.innerHTML = (`${currencyInput.value} USD is ${Number(currencyInput.value * 0.9585799).toFixed(2)} EUR`) 
            }
            else if (conversion === "eurToUSD") {
                returnText.innerHTML = (`${currencyInput.value} EUR is ${Number(currencyInput.value / 0.9585799).toFixed(2)} USD`) 
            }
            else if (conversion === "usdToYEN") {
                returnText.innerHTML = (`${currencyInput.value} USD is ${Number(currencyInput.value * 138.63008).toFixed(2)} YEN`) 
            }
            else if (conversion === "eurToYEN") {
                returnText.innerHTML = (`${currencyInput.value} EUR is ${Number(currencyInput.value * 144.65463).toFixed(2)} YEN`) 
            }
            else if (conversion === "yenToUSD") {
                returnText.innerHTML = (`${currencyInput.value} YEN is ${Number(currencyInput.value / 138.63008).toFixed(2)} USD`) 
            }
            else if (conversion === "yenToEUR") {
                returnText.innerHTML = (`${currencyInput.value} YEN is ${Number(currencyInput.value / 144.65463).toFixed(2)} EUR`) 
            }
        }
    }
}

class weightConverter {
    constructor() {
        this.weight = weightInput.value; 
    }
    convert() {
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                var conversion = options[i].id; 
            }
            if (conversion === "lbsToKG") {
                returnText.innerHTML = (`${weightInput.value} pounds is ${Number(weightInput.value / 2.205).toFixed(2)} kilograms`) 
            }
            else if (conversion === "kgToLBS") {
                returnText.innerHTML = (`${weightInput.value} kilograms is ${Number(weightInput.value * 2.205).toFixed(2)} pounds`) 
            }
        }
    }
}

function convertWeight() {
    const weightconverter = new weightConverter; 
    weightconverter.convert(); 
}

function convertTemperature() {
    const tempConverter = new temperatorConverter; 
    tempConverter.convert(); 
}

function convertDistance() {
    const distConverter = new distanceConverter; 
    distConverter.convert(); 
}

function convertCurrency() {
    const currConverter = new currencyConverter; 
    currConverter.convert(); 
}


function resetValue() {
    returnText.innerHTML = ""
    distanceInput.value = null; 
    currencyInput.value = null; 
    weightInput.value = null; 
    temperatureInput.value = null; 

}

submitButton.addEventListener('click', convertTemperature);
submitButton.addEventListener('click', convertDistance);
submitButton.addEventListener('click', convertWeight);
submitButton.addEventListener('click', convertCurrency);

clearButton.addEventListener('click', resetValue)

endButton.addEventListener('click', endProgram)

function endProgram() {
    document.body.innerHTML="Thanks for joining me in Conversion Central."; 
    document.body.style.fontSize = '50px'; 
    document.body.style.display = "flex"; 
    document.body.style.justifyContent = 'center'; 
    document.body.style.alignItems = "center"; 
    document.body.style.textAlign = "center"; 
    document.body.style.minHeight = "100vh"; 
    document.body.style.color = 'white';
}