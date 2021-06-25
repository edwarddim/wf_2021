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



// FUNCTIONS
// DEFINING FUNCTION VS CALLING FUNCTION
// PARAMETERS VS ARGUMENTS

// DEFINE THE FUNCTION
function double(someNumber){
    var result = someNumber * 2
    return result
}

// CALL THE FUNCTION
console.log(double(4))
console.log(double(-4))
console.log(double(0))
console.log(double("edward"))

function add(x,y){
    var results = x + y
    return results
}

var answer = add(4,5)
var answer2 = add(100,100)
console.log(answer)
console.log(answer2)


var x = 5;
    
function setX(newValue) {
    var x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

// ----------------------------------
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// ----------------------------------
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);


//-------------------------------------------
/* 
'||''''| '||''|.   '||' '||''|.       |     '||' '|' 
 ||  .    ||   ||   ||   ||   ||     |||      || |   
 ||''|    ||''|'    ||   ||    ||   |  ||      ||    
 ||       ||   |.   ||   ||    ||  .''''|.     ||    
.||.     .||.  '|' .||. .||...|'  .|.  .||.   .||.   
*/

// HOW TO SWAP VARIABLES
var fruit1 = "apples"
var fruit2 = "oranges"

var temp = fruit1
fruit1 = fruit2
fruit2 = temp


var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1
}

var randomInt = getRandomInt(20)
while(randomInt != 20){
    console.log("You rolled a " + randomInt + " try again")
    console.log(`You rolled a ${randomInt} try again`)
    randomInt = getRandomInt(20)
}
console.log("CONGRATS you rolled a 20")

// REVERSE AN ARRAY
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP)
// NEED A TEMP VARIABLE TO STORE A VALUE
// SWAP THE VALUES WITHIN THE ARRAY
// RETURN THE ARRAY