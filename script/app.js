let celsiusInput = document.querySelector('#cel > input');
let fahrenheitInput = document.querySelector('#fah >input');
let kelvinInput = document.querySelector('#kel > input');
let btn = document.querySelector('#btn > button');

function roundNumber(number){
    return Math.round(number*100/100)
};

// Celsius to fahrenheit and Kelvin.


celsiusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*1.8) + 32;
    let kTemp = cTemp+ 273.15;

    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
});
// fahrenheit to celsius and kelvin.

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp -32)*(5/9);
    let kTemp = ((fTemp-32)/1.8)+273.15;
    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    
});

    // kelvin to fahrenheit and celsius.
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15)*(1.8)+32
    celsiusInput.value =roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
});

btn.addEventListener('click' , function(){
    fahrenheitInput.value = ""
    celsiusInput.value = ""
    kelvinInput.value = ""
});