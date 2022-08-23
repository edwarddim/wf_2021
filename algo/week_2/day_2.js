// [1,2,3,4,5] => [1,4,9,16,25]


function squareArrayValues(arr){
    // ITERATE THROUGH THE ARRAY
    for(var i = 0; i < arr.length;i++){
        // SQUARE EACH VALUE, REPLACE THE CURRENT VALUE
        arr[i] = arr[i] * arr[i]
    }
    // RETURN THE ARRAY
    return arr
}

// SPACE COMPLEXITY O(1)
// TIME COMPLEXITY O(n)

function squareArrayValuesOneLine(arr){
    return arr.map(x => x*x)
}

// SPACE COMPLEXITY O(n)
// TIME COMPLEXITY O(n)

// BIG O NOTATION


// [3,4,1,7,9,6], y = 4
function printArrayCountGreaterThanY(arr, y){
    // CREATE A VARAIBLE THAT IS GOING TO KEEP COUNT
    // ITERATE THROUGH THE ARRAY
        // CHECK TO SEE IF THE ARRAY VALUE IS GREATER THAN Y
            // INCREMENT THE COUNT VARIABLE
    // PRINT THE COUNT VARIABLE
}