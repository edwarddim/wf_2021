// VARIABLES - allow us to hold and manipulate data

// DECLARING AND INITIALIZING A VARIABLE
var fullName = "Edward Im"
var firstName = "John"
var lastName = "Doe"

// 1. Declare a variable
var age
// 2. Initialize a value
age = 31

// ADDITION
age = age + 6
age += 9

age++ // add 1 to the VAR age

// SUBTRACTION
age = age -2
age -= 5

age-- // minus 1 to the VAR age


// MULTIPLICATION / DIVISION
age = age * 2
age *= 2

age = age / 2
age /= 4

// MODULOUS OPERATOR
age = 31
31 % 2



// LOOPS
// 1. Declare an initialize a variable
// 2. Condition
// 3. Increment / Decrement
console.log("LOOP BEGINNING")
for(var index = 0; index < 255; index++){
    // 4. Code Body
    console.log(index)
}
console.log("LOOP ENDED")

//-------------------------------------------
//-------------------------------------------
//-------------------------------------------

// T CHART

var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello") // CONCATONATION



//-------------------------------------------
//-------------------------------------------
//-------------------------------------------

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);