// ARRAYS - DATA STRUCTURES

var age = 31

var name = "Edward"

var check = false

var price = 3.20

//    INDEX     0       ,  1   ,  2  ,  3
var array = ["Edward Im", false, 3.20, 31]


array[0] = "Im Edward"



// ADD A VALUE TO THE ARRAY
array.push("new value")

// REMOVE A VALUE
console.log("BEFORE: ", array)
console.log(array.pop())
console.log("AFTER: ", array)

console.log(array.length)



// ALL VALUES IN AN ARRAY MUST BE THE SAME DATA TYPE
var numberArray = [1,2,34,5,56,7,74,3,6,8]
var nameArray = ["Edward", "Jedward", "Gedward"]
var priceArray = [3.20, 13.43]


// DEFINING THE FUNCTION
function printArray(paramArray){
    for(var i = 0; i < paramArray.length; i++){
        console.log(paramArray[i])
    }
}

// CALL THE FUNCTION
printArray(numberArray)
printArray(nameArray)
printArray([3.20, 13.43])