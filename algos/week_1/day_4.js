// DEFINE THE FUNCTION
function multiply(numA, numB){
    if(numA === undefined || numB === undefined){
        console.log("error arguments not provided")
        return false
    }
    console.log(numA)
    console.log(numB)
    return numA * numB;
}


// CALL THE FUNCTION
var answer = multiply()
console.log(answer)

// console.log(multiply(10,12))


function print1ToGivenNumber(target){
    for(var i = 1; i <= target; i++){
        console.log(i)
    }
}

print1ToGivenNumber()
print1ToGivenNumber()