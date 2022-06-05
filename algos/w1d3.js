// CONDITIONALS

var age = 15

if(age >= 16){
    console.log("You can drive")
}
if(age >= 18){
    console.log("You can buy lottery tickets")
}
if(age >= 21){
    console.log("You can buy tobacco and alcohol")
}
else if(age < 16){
    console.log("Come back when you're older")
}

if(age >= 21){
    console.log("You can buy tobacco and alcohol")
    console.log("You can buy lottery tickets")
    console.log("You can drive")
}
else if(age < 21 && age >= 18 ){
    console.log("You can buy lottery tickets")
    console.log("You can drive")
}
else if(age < 18 && age >= 16){
    console.log("You can drive")
}
else{
    console.log("Come back when you're older")
}



// ----------------------------------------------------------------------------

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];


for(var index = 0; index < numbers.length; index++){
    if(numbers[index] >= 0){
        countPositives++
    }
}

// your code here!
    
console.log("there are " + countPositives + " positive values");