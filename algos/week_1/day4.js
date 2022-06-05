// ARRAYS - ORDERED DATA STRUCTURE

var fullName = "Edward Im"
var age = 31
var married = false


var userInfo = ["Edward Im", 31, "Los Angeles", false]

// console.log(userInfo[0])
// console.log(userInfo[3])


// 1. ARRAYS SHOULD HOLD THE SAME DATA TYPES
// 2. ARRAYS SHOULD HOLD RELATIVE INFORMATION
var firstNames = ["Edward", "Jane", "John", "Steve", "Smith"]
var evenNumbers = [2,2,4,6,8,10]
var users = ["Edward Im", "Jane Doe", "John Doe"]


// ADDING TO AN ARRAY - push
var nameArray = []
nameArray.push("Edward Im")
nameArray.push("John Doe")
nameArray.push("Jane Doe")

// console.log(nameArray)

// REMOVING FROM AN ARRAY - pop
// console.log("REMOVED VALUE FROM ARRAY: ", nameArray.pop())
// var removedPerson = nameArray.pop()
// console.log(nameArray)

// GETTING THE LENGTH(SIZE) OF THE ARRAY
nameArray.length // ATTRIBUTE


// LAST VALUE IN A GIVEN ARRAY
nameArray[nameArray.length - 1]

// FIRST VALUE IN A GIVEN ARRAY
nameArray[0]



// ITERATING THROUGH AN ARRAY

// 1. DEFINING THE FUNCTION
function printArray(array){
    for(var i = 0; i < array.length ;i++){
        console.log(array[i])
    }
}

// 2. CALLING (EXECUTING) THE FUNCTION
console.log(printArray(['a','b','c','d','e','f']))
printArray([10,9,8,7,6,5,4,3,2,1])
printArray(nameArray)