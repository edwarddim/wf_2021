// CONDITIONALS

// BOOLEANS
var has_account = false // true


if(has_account){
    console.log("Go ahead and login")
}
else{ // CATCH ALL STATEMENT
    console.log("Register and give us all your data")
}


var age = 15

if(age >= 21){
    console.log("Get a driver's license")
    console.log("Vote and buy lottery tix")
    console.log("Buy alcohol and tobacco")
}
else if(age >= 18){
    console.log("Get a driver's license")
    console.log("Vote and buy lottery tix")
}
else if(age >= 16){
    console.log("Get a driver's license")
}
else{
    console.log("Come back when you are older")
}

age = 19

if(age >= 16){
    console.log("Get a driver's license")
}
if(age >= 18){
    console.log("Vote and buy lottery tix")
}
if(age >= 21){
    console.log("Buy alcohol and tobacco")
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
var isRaining = true;
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