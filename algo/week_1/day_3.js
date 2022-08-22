// CONDITIONAL STATEMENTS
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// var myName = "Edward"
// if(myName === "Edward"){
//     console.log("You are Edward")
// }
// else if(myName === "Medrik"){
//     console.log("You are Medrik")
// }
// else if(myName === "Hans"){
//     console.log("Hans")
// }
// else{
//     console.log("You are NOT Edward")
// }


// var first = "Edward"
// var last  = ""
// var email = "ed@gmail.com"
// var password = "testpassword"
// var confirmPassword = "testpss"

// // FIRST NAME MUST EXIST, AT LEAST 3 CHARACTERS LONG
// if(first.length < 3){
//     console.log("First NAme must be longer that 3 chars")
// }
// // LAST NAME MUST EXIST, AT LEAST 3 CHARACTERS LONG
// if(last.length < 3){
//     console.log("Last NAme must be longer that 3 chars")
// }
// // EMAIL MUST EXIST, EMAIL CANNOT EXIST IN SYSTEM
// if(email.length > 0){
//     console.log("Email must exist")
// }
// // PASSWORD MUST BE 8 CHARS LONG
// if(password.length < 8){
//     console.log("Passowrd must be longer than 8 chars")
// }
// // PASSWORD AND CONFIRMPASSWORD MUST MATCH
// if(password != confirmPassword){
//     console.log("Pass and Confirm must match")
// }




var age = 40

if(age >= 21){
    console.log("What do you want??")
}
else if(age >= 18){
    console.log("Anything but alcohol and tobacco")
}
else{
    console.log("You can buy a slurpee")
}



// Write a for loop that prints ODD NUMBERS 1 - 255
for(var i = 1; i < 256; i++){
    // MODULOUS
    if(i % 2 === 1){
        console.log(i)
    }
}

// 10 % 3 => 1
// 10 % 2 => 0
// 11 % 2 => 1
// 12 % 2 => 0

// Write a for loop that prints EVEN NUMBERS 255 - 1
for(var i = 254; i >= 1; i--){
    if(i % 2 === 0){
        console.log(i)
    }
}

// WRITE A LOOP THAT FINDS MULTIPLES OF 4 BETWEEN 255 - 1
for(var i = 0; i < 256; i++){
    if(i % 4 === 0){
        console.log("found multiple of 4")
    }
}