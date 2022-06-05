// VARIABLES - allow us to hold and manipulate data

// DECLARING AND INITIALIZING A VARIABLE
var fullname = "Edward Im"
var myName = "Ed"
var other_full_name = "Jane Doe"
var address = "123 Something Way"
var greeting = "Hello!!!!"

// 1. Declare a variable
var age
// 2. Initializing a variable
age = 31


age = age + 3
age += 3
age++ // increment by 1

age = age - 3
age -= 3
age-- // decrement by 1

age = age * 3
age *= 3

age = age / 3
age /= 3

// MODULOUS OPERATOR
age = age % 2
age %= 2


// LOOPS
console.log("LOOP START")
for(var index = 0; index <= 500; index++){
    console.log(index)
}
console.log('LOOP END')


// PREDICT THE OUTPUT
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);