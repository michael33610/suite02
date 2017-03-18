/*

    Two ways currency converter

    1) Write one function "numberToPrice" that convert a number to a price.

        If we got the number 4 in parameter,
        you need to return a string that contain "4,00€";

    2) Write a second function "priceToNumber" that convert a price to a number.

        If we got the string "4,59€" in parameter,
        you need to return a float number that is equal to 4.59;

    3) If we pass an empty string or negative number, return 0 or empty string;

    Is 0 positive or negative ?

    Write your own tests !

*/

// write your code below this comment

console.log(number2Price(27));
console.log(price2Number("4.87€"));
console.log(number2Price(""));
console.log(price2Number(""));

console.log(Math.sign(0));
console.log(Math.sign(-0));


function number2Price(param){
    if ((param<0) || (param=="")){
        return((param<0)?0:"");
    }
    return((param * 100 / 100)+"€");
}

function price2Number(param){
    var nombre=parseFloat(param);
    if (isNaN(nombre)){
        return("");
    }
    if ((nombre<0) || (nombre=="")){
        return((nombre<0)?0:"");
    }
    return(nombre);
}