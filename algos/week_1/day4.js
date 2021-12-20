// ARRAYS - DATA STRUCTURE

var firstName = "Edward"
var lastName = "Im"
var age = 31
var location = "Los Angeles"

var userInfo = ["Edward", "Im", 31, "Los Angeles"]

console.log(userInfo)

console.log(userInfo[3]) // print "Los Angeles"


// CAMEL CASE
var numberArray = [4,2,6,23,845,1,0]


// SWAP VALUES
var orange = "orange"
var apple = "apple"

var temp = orange
orange = apple
apple = temp

var numberArr = []

for(var number = 1; number < 256; number++){
    // ADDING VALUES TO AN ARRAY TO THE BACK
    numberArr.push(number)
}

// REMOVING VALUES FROM AN ARRAY FROM THE BACK
var removedValue = numberArr.pop()
console.log(removedValue)

// GETTING THE LENGTH(SIZE) OF THE ARRAY
numberArr.length

// FIRST VALUE IN ANY GIVEN ARRAY
numberArr[0]
// LAST VALUE IN ANY GIVEN ARRAY
numberArr[numberArr.length - 1]

function printArray(array){
    // ITERATE THROUGH THE ARRAY
    for(var index = 0; index < array.length; index++){
        console.log(array[index])
    }
}

printArray(["a", "b", "c", "d", "e"])


// REVERSE AN ARRAY

function reverseArray(array){
    var returnArr = []
    // ITERATE THROUGH THE ARRAY BACKWARDS
    for(var index = array.length - 1; index > -1; index--){
        // PUSH THE VALUES INTO A NEW ARRAY
        returnArr.push(array[index])
    }
    return returnArr
}
console.log(reverseArray(["a", "b", "c", "d", "e"]))

function reverseArraySwap(array){
    // ITERATE THROUGH THE ARRAY
    for(var index = 0; index < array.length/2; index++){
        // STORE ONE OF THE VALUES IN A TEMP
        var temp = array[index]
        // REPLACE THE STORED VALUED
        array[index] = array[array.length - 1 - index]
        // PLACE THE TEMP VALUE IN THE OTHER VARIABLE
        array[array.length - 1 - index] = temp
    }
    console.log(array.length/2)
    return array
}

console.log(reverseArraySwap(["a", "b", "c", "d", "e"]))