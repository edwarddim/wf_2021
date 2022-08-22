// ARRAYS
var name = "Edward Im"
var age = 31
var check = false
var price = 3.2
//               0        1    2      3    INDEX
var array = ["Edward Im", 31, false, 3.2]

// console.log(array[0])
// console.log(array[3])

var myInfo = ["Edward Im", 31, "ed@gmail.com", "black"]



// ARRAYS SHOULD HOLD THE SAME TYPE OF DATA
// ARRAYS SHOULD HOLD SIMILAR DATA
var numberArray = [1,2,3,4,5,6,7,8]
var priceArray = [1.3, 4.5, 5.8, 111144332.00]



// MAINPULATE AN ARRAY

var characterArray = []

// ADD A VALUE
// console.log(characterArray)
characterArray.push("a")
characterArray.push("b")
characterArray.push("c")
// console.log(characterArray)
// REMOVE A VALUE
characterArray.pop()
// console.log(characterArray)

// THE LENGTH OF THE ARRAY
// console.log(characterArray.length)
// console.log(characterArray.length - 1)


var nameArray = ["Ed", "Jane", "John", "Jimmy", "Jane Again"]
nameArray[4] = "Jimmy Carter"
// ITERATE THROUGH AN ARRAY
for(var i = 0; i < nameArray.length; i++){
    console.log(nameArray[i])
}

var numArray = [4,6,8,3,9,2]


function printArrVals(arr){
    // ITERATING THROUGH AN ARRAY
    for(var i = 0; i < arr.length; i++){
        // PRINTING THE VALUES
        console.log(arr[i])
    }
}

// printArrVals([1,2,3,4,5,6,7])
// printArrVals(['a','b','c','d'])
// printArrVals(["Ed", "Jane", "John", "Jimmy", "Jane Again"])

// [-7, -2, -3, -5, -1]
function printMaxOfArray(arr){
    // ITERATING THROUGH AN ARRAY
    var max = arr[0]
    for(var i = 0; i < arr.length;i++){
        // COMPARE THE VALUES TO SEE IF WE FIND A MAX NUMBER
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}
function printMinOfArray(arr){
    // ITERATING THROUGH AN ARRAY
    var min = arr[0]
    for(var i = 0; i < arr.length;i++){
        // COMPARE THE VALUES TO SEE IF WE FIND A min NUMBER
        if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log(min)
}