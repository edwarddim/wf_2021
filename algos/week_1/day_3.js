// CONDITIONALS - boolean

var check = false

if (check) {
    console.log("check is true")
}
else { // CATCH ALL STATEMENT
    console.log("check is NOT true")
}


var age = 16
if (age >= 21) {
    console.log("have a drink or a smoke")
}
else if (age >= 18) {
    console.log("buy a lottery ticket")
}
else {
    console.log("buy a slurpee")
}

var full_name = "Edward Im"
if (full_name.length <= 2) {
    console.log("Full name is required")
}
if (email.length <= 2) {
    console.log("Email is required")
}
if (password.length <= 2) {
    console.log("Pasword must be 8 chars longk")
}

// === comparison(is equals)
// !== comparison (NOT equals)
if (password !== confirmPassword) {
    console.log("Password and confirm password must match")
}

for (var i = 10; i > 0; i--) {
    if (i !== 2) {
        console.log(i);
    } 
    else {
        console.log("ignition!");
    }
}

console.log("liftoff!");
