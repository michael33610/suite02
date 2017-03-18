/*

    Thermometer

    Write a function "randomTemperatur" that return a temperature in Celsius or in Farenheight

    This function take one parameter that can be:
    
    "c" if we want to have a celsius value
    "f" if we want to have a farenheight value

    The number to calcul is a generated random number.
    You must create this random number.

    Write your own tests !
    
*/
console.log(randomTemperatur('C'));
console.log(randomTemperatur('f'));
console.log(randomTemperatur(''));


// write your code below this comment
function randomTemperatur(param){
    var tempCelcius=(Math.trunc(Math.random()*10000))/100;
    if (param.toUpperCase()=="C") {
        return(tempCelcius+"°C")
    } else if (param.toUpperCase()=="F"){
        return( ((Math.trunc( ((tempCelcius * 1.8) + 32) * 100)/100) )+"°F" );
    } else {
        return(" echelle d temperature non gere");
    }
}