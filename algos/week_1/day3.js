// FUNCTIONS

// 1. DEFINE THE FUNCTION
function add(num1, num2){
    return num1 + num2
}

// 2. CALL THE FUNCTION
console.log(add(4,9))
console.log(add(123,456))
console.log(add(5354354312321,5436457456524523))




// PARAMETERS AND ARGUMENTS

function multiply(num1, num2){
    console.log("hello I am multiplying")
    return num1 * num2
}

var answer_from_function = multiply(4353423,4534)
console.log(answer_from_function)

console.log(multiply(4353423,4534))



// DEFINING THE FUNCTION
function hello(){
    console.log("Hello")
    for(var i = 0; i < 5; i++){
        console.log(i)
    }
}
// CALLING THE FUNCTION
hello()



// ---------------------------------------------------------------//
var x = 5;
    
function setX(newValue) {
    return newValue; 
}
    
console.log(x);
x = setX(15);
console.log(x);

// ---------------------------------------------------------------//
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX();
console.log(result);
console.log(x);