// 1. DEFINE THE FUNCTION
function print1to50(){
    for(var i = 1; i < 51; i++){
        console.log(i)
    }
}

// 2. CALLING THE FUNCTION (EXECUTING THE FUNCTION)
print1to50()
print1to50()
print1to50()
print1to50()
print1to50()




// 1. DEFINE THE FUNCTION
function multiply(num1, num2){
    console.log("Hello World")
    console.log("INSIDE THE FUNCTION: ",num1 * num2)
    return num1 * num2
}

// 2. CALL THE FUNCTION
// console.log(multiply(12,20))
// console.log(multiply(45,45))

// var result = multiply(4,4)
// console.log(result)
console.log("OUTSIDE THE FUNCTION: ")





var x = 5;
    
function setX(newValue) {
    x = newValue;
}
    
console.log(x);
setX(15);
console.log(x);