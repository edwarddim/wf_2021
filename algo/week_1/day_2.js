// VARIABLES

// DECLARING A VARIABLE
var full_name;

// INITIALIZING A VARIABLE
full_name = "Edward Im"

// DECLARING AND INITIALIZING A VARIABLE
var nick_name = "Ed Im" // String
var age = 31 // Integers
var awake = true; // Boolean
var awake = false;
var height = 4.2; // Floats

// ADDITION
age = age + 1
age += 1


// SUBTRACTION
age = age - 1
age -= 1

// MULTIPLICATION AND DIVISION
age = age * 2
age *= 2

age = age / 3
age /= 3

console.log(age)

var age = "31"
var number = 2

// CONCATENTATION
console.log(age + number)
var first_name = "Ed"
var last_name = "Im"

console.log(last_name + "," + first_name)


// LOOPS

// FOR LOOPS
// DRY - Don't Repeat Yourself

//    VARIABLE       CONDITION    INCREMENT
//       1            2            3
for(var index = 0; index < 3; index++){
    // 4 CODE BODY
    console.log(index)
    console.log("BOTTOM OF CODE BODY")
}
console.log('OUSTIDE OF THE LOOP')

for(var i = 100; i >= 0; i--){
    console.log(i)
}
// 1 => 2 => 4
// 3 => 2 => 4
// 3 => 2 => 4