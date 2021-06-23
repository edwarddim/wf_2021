// VARIABLES
var myName = "Edward Im" //STRING
var age = '30' // STRING

var myAge = 30 // NUMBERS OR INTEGERS
var weight = 190.5 // FLOATS or DOUBLE
var sleepy = false // BOOLEAN

// ARRAYS - ORDERED DATA STRUCTURES
var names = ["Edward", "John", "Jane"]

console.log(names[4])

// FOR LOOPS AND WHILE LOOPS


for(var num = 1; num < 7; num+=2){
    console.log(num)
}

var num = 1
console.log(num)
num++ // num = num + 1 OR num += 1
console.log(num) // 2
num++
console.log(num) // 3




// CONDITIONALS
var username = "eddieim"
var password = "qwerty12345"


// <, >, <=, >=, ==, !=
if(username == "eddieim" && password == "qwerty12345"){
    console.log("Welcome Edward Im")
}

var age = 23


if(age >= 25){
    console.log("You can vote and you can buy lottery tickets")
    console.log("You can purchase nicotine, alcohol, and mj")
    console.log("Rent a car")
}
else if(age >= 21){
    console.log("You can vote and you can buy lottery tickets")
    console.log("You can purchase nicotine, alcohol, and mj")
}
else if(age >= 18){
    console.log("You can vote and you can buy lottery tickets")
}
else{
    console.log("You are a little young come back later")
}


var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);


for(var i=10; i>0; i--) {
    if(i != 2) {
      console.log(i);
    } else {
      console.log("ignition!");
    }
}
      
  console.log("liftoff!");


// GIVEN AN ARRAY PRINT THE NUMBER OF POSITIVE INTEGERS WITH GIVEN ARRAY
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// ITERATE THROUGH THE ARRAY (FOR LOOP)
// CHECK TO SEE IF THE NUMBERS IN ARRAY ARE GREATER OR EQUAL TO 0 (CONDITIONAL)
    
console.log("there are " + countPositives + " positive values");