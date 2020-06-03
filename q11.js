var celsius; celsius = 25;
var fahrenheit; fahrenheit = 70;

// shows the value of variable celsius
function showCelsius(degCelsius) {
    document.write(degCelsius);
}

// shows the value of variable fahrenheit
function showFahrenheit(degFahrenheit) {
    document.write(degFahrenheit)
}

// calculates the temperature in Fahrenheit
function calcFahrenheit(tempCelsius) {
    document.write(tempCelsius * 9/5 + parseInt(32));
}

// calculates the temperature in Celsius
function calcCelsius(tempFahrenheit) {
    document.write((tempFahrenheit - parseInt(32)) * 5/9);
}