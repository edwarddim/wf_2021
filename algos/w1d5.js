// SWAPPING VARIABLES

var apples = "apples"
var oranges = "oranges"

var temp = apples

apples = oranges
oranges = temp

// -------------------------------------------

var apples = "apples"
var oranges = "oranges"


oranges = apples
// OR
apples = oranges

// -------------------------------------------

var array = ["a", "b", "c", "d", "e"]

var temp = array[0]
array[0] = array[4]
array[4] = temp



// DEFINING FUNCTION
function reverse(arr){
    // ITERATE THROUGH THE ARRAY UNTIL THE HALFWAY POINT
    for(var i = 0; i < arr.length/2; i++){
        // USING VARIABLE i and arr.length - 1 - i, SWAP VALUES 
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

// CALLING THE FUNCTION
console.log(reverse(["a", "b", "c", "d", "e"]))