// ARRAYS - ORDERED DATA STRUCTURES

var firstName = "Edward"
var lastName = "Im"
var age = 31
var location = "Los Angeles"

var userInfo = ["Edward", "Im", 31, "Los Angeles"]


// console.log(userInfo)
// userInfo[3] = "Boise"
// console.log(userInfo)
console.log(userInfo[3])





// 1. ARRAYS SHOULD THE SAME DATA TYPES
// 2. ARRAYS SHOULD HOLD LIKE DATA TYPES
// var numberArray = [4,65,2,7,9,1,34]
// var nameArray = ["Edward", "John", "Jane"]


// ADDING TO AN ARRAY - push
var nameArray = []
nameArray.push("Edward")
nameArray.push("Jane")
nameArray.push("John")

// REMOVING FROM AN ARRAY - pop
// console.log(nameArray)
// console.log("NAME POPPED FROM ARRAY: ", nameArray.pop()) // ????
// console.log(nameArray)
// console.log("NAME POPPED FROM ARRAY: ", nameArray.pop()) // ????
// console.log(nameArray)

// GETTING THE LENGTH(SIZE) OF THE ARRAY
// console.log(nameArray.length)

// LAST VALUE IN A GIVEN ARRAY
nameArray[nameArray.length - 1]

// FIRST VALUE IN A GIVEN ARRAY
nameArray[0]






// ITERATING THROUGH AN ARRAY - nameArray

function printArray(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

printArray([1,2,3,4,5,6,7,8,9])
printArray(nameArray)
printArray(['a','b','c','d','e'])