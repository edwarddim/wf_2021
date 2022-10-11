// VARIABLES
// DECLARING A VARIABLE AND INITIALIZING A VALUE
var kobe
kobe = 24

var x = 10 // integer
var price = 20.2 // float
var check = true // boolean
var first_name = "Edward" // strings

// ADDITION
var age = 32

age = age + 3
age += 3
age++ // increments by 1

// SUBTRACTION
age = age - 1
age -= 1
age-- // decrements by 1

// MULTIPLICATION / DIVISION
age = age * 2
age *= 2

age = age / 2
age /= 2

// MODULOUS
13 % 2 // 1
15 % 5 // 0

// CONCATENTATION - CONCAT
var greeting = "Hello"
greeting += " World"
console.log(greeting)

var first_name = "Edward"
var last_name = "Im"
var full_name = first_name + " "  + last_name
console.log(full_name)

var number = 123
number += "456"
console.log(number)

// LOOPS
// DRY - Don't Repeat Yourself


for(var index = 1; index <= 256; index++){
    console.log(index)
}
console.log("OUTSIDE", index)

for(var index = 255; index > 0;index--){
    console.log(index)
}

