// FUNCTIONS

// DEFINING A FUNCTION
function print255to1(){
    for(var i = 255; i >= 1; i--){
        if(i % 2 === 1){
            console.log(i)
        }
    }
}

// CALL THE FUNCTION
print255to1()
print255to1()
print255to1()
print255to1()
print255to1()

// PARAMETERS AND ARGUMENTS




var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

var x = 5;
function addToX(amount) {
    console.log("hello there");
    return x + amount;
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

function intsAndSum(){
    var sum = 0
    // loop from 0 - 255
    for(var i =0; i <= 255; i++){
        console.log(i)
        sum += i // sum = sum + i
        console.log(sum)
    }
}

intsAndSum()