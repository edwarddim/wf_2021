// DATA STRUCTURES - ARRAYS

// ORDERED DATA STRUCTURE
var full_name = "Edward Im"
var age = 32
var hair_color = "black"
var check = false


var userInfo = ["Edward Im", 32, "black", false]
// console.log(userInfo)

// ALL VALUES INSIDE OF AN ARRAY MUST BE THE SAME DATA TYPE
// VALUES MUST BE OF THE SAME CATEGORY



var priceArray = [2.30, 12.23, 5.39]



// ADDING A VALUE TO ARRAY
// var nameArray = ["Edward"]
// nameArray.push("Jahmil")
// nameArray.push("Buddy")
// console.log(nameArray)


// REMOVING A VALUE TO ARRAY
// console.log("REMOVED VALUE: ", nameArray.pop())

// var removedValue = nameArray.pop()
// console.log("REMOVED VALUE: ", removedValue)
// nameArray.pop()
// nameArray.pop()
// console.log(nameArray)


// LENGTH OF THE ARRAY



var nameArray = ["Edward", "Jahmil", "Buddy", "Ryan", "Roy", "Eric", "Nick", "Simba"]
// console.log(nameArray.length)

// console.log(nameArray[3])

// for(var i = 0; i < nameArray.length; i++){
//     console.log(nameArray[i])
// }


function printArray(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
}


printArray(["Edward", "Jahmil", "Buddy", "Ryan", "Roy", "Eric", "Nick", "Simba"])
printArray([1,2,3,4,5,6,7,8,9])
printArray(['a','b','c','d'])