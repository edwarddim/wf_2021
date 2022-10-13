// 1. DEFINE THE FUNCTION
function multiply(a,b){
    return a * b
}

// 2. CALL THE FUNCTION
// var output = multiply(23,43)
// console.log(output)

// console.log(multiply(123,345))



// 1. DEFINING THE FUNCTION
function square(buddy){
    console.log("THIS IS INSIDE THE FUNCTION")
    return buddy * buddy
}

// 2. CALL THE FUNCTION

// console.log(square(25))

function print1to50(){
    for(var i = 1; i < 51; i++){
        console.log(i)
    }
}

// print1to50()
// print1to50()
// print1to50()
// print1to50()
// print1to50()


// CREATE A FUNCTION THAT GIVEN A NUMBER WILL PRINT FROM 1 TO THE GIVEN NUMBER

// 1. DEFINING THE FUNCTION
function printToNumber(givenNumber){
    for(var i = 1; i <= givenNumber; i++){
        console.log(i)
    }
}

// 2. CALL, INVOKE, EXECUTE THE FUNCTION
// printToNumber(13)
// printToNumber(133)


var x = 5;

function setX(newValue) {
    x = newValue;
    console.log('INSIDE THE FUNCTION: ',x)
}

console.log('OUTSIDE THE FUNCTION: ', x);
setX(15);
console.log('OUTSIDE THE FUNCTION: ', x);
