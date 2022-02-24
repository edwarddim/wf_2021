// CONDITIONALS

var logged_in = false


if(logged_in){
    console.log("WELCOME TO FACEBOOK")
}
else{
    console.log("LOGIN / REGISTER PAGE")
}


var age = 8

if(age >= 21){
    console.log("You can buy tobacco and alcohol")
}
else if(age >= 18){
    console.log("Buy lottery ticket and vote")
}
else if(age >= 16){
    console.log("Start getting a drivers license")
}
else{
    console.log("Come back when you are older")
}

// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //

var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
}
else {
    num1 = num1 / num2;
}
if (num1 < num2) {
    num1 = num1 * 2;
}
else if (num1 == num2) {
    num2 = num1 * num2;
}
else {
    num2 = num2 * 2;
}
console.log(num1);
console.log(num2);


// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
for (var j = 1; j <= 15; j++) {
    if (j % 2 == 0) {
        j += 2;
    }
    else if (j % 3 == 0) {
        j++;
    }
    console.log(j);
}