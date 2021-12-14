// VARIABLES
var full_name = "Edward Im"

// 1. DECLARING A VARIABLE
var age
// 2. INTIALIZE A VALUE FOR THE VARIABLE
age = 31

age = age + 1
age += 1
age++ // increment by 1

age = age - 1
age -= 1
age-- // decrement by 1

age = age * 1
age *= 1

age = age / 1
age /= 1

// MODULOUS
5 % 2 

// BOOLEAN
var is_raining = true
var is_sunny = false

// DOUBLE
var price = 30.22


var string_age = "31"
string_age += 1

console.log("Hello I am the console log function")
console.log(string_age)


// LOOPS

// FOR LOOPS

console.log("Before loop")
for(var number = 0; number < 51; number++){

    console.log(number)

}
console.log("After loop")
console.log(number)


// PREDICT THE OUTPUT
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");




// PREDICT THE OUTPUT
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);


for(var number = 0; number < 51; number++){
    console.log(number)
}

// WRITE A FOR LOOP THAT PRINTS FROM 50 TO 1
for(var number = 50; number > 0; number--){
    console.log(number)
}