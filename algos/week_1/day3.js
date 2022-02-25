// 1. DEFINE THE FUNCTION
function print1to50(){
    for(var i = 0; i < 51; i++){
        console.log(i)
    }
}


// 2. CALL THE FUNCTION
// print1to50()

// console.log("HELLO WORLD--------------------")

// print1to50()



// PARAMETERS AND ARGUMENTS
// MULTIPLY FUNCTION

// 1. DEFINE THE FUNCTION
function multiply(num1, num2){
    console.log("INSIDE THE FUNCTION RESULT: ", num1 * num2)
    return num1 * num2
}

// 2. CALL THE FUNCTION
var result = multiply(12,45)
console.log("RESULT: ", result)

console.log(multiply(44,44))
console.log(multiply(123,123))




// SQUARE THE NUMBER

// 1. DEFINE THE FUNCTION
function square(num){
    return num**2
}

// 2. CALL THE FUNCTION
console.log(square(5))
console.log(square(25))