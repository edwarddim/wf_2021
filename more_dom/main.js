
function liteMode(){
    var container = document.querySelector("#container")
    container.classList.remove("dark-mode")
    container.classList.add("lite-mode")
}

function darkMode(){
    var container = document.querySelector("#container")
    container.classList.remove("lite-mode")
    container.classList.add("dark-mode")
}

function changeImage(){
    var image = document.querySelector("#container > img")
    image.src = "./images/pirate.webp"
}

function revertImage(){
    var image = document.querySelector("#container > img")
    image.src = "./images/unnamed.png"
}


var count = 0
function addCount(){
    count++
    console.log(count)
    var h1 = document.querySelector("#output")
    // var text = "You've clicked " + count + " times!!!"
    // h1.innerText = text
    h1.innerText = `You've clicked ${count} times!!`
}

var count_lower = 0
function addCountLower(){
    count_lower++
    var h1 = document.querySelector("#output_lower")
    h1.innerText = `You've clicked ${count_lower    } times!!`
}

// FORM CHANGES

var email = ""
function emailChange(element){
    // STORE THE INPUT'S VALUE INSIDE THE EMAIL VARIABLE
    email = element.value
}


function showEmail(){
    alert("You are logging in with " + email)
}

function chooseLunch(element){
    console.log(element.value)
    confirm("Are you sure you want to eat " + element.value + " ?")
}


// TIMEOUT
// 1. CALLBACK FUNCTION
// 2. THE TIME TO WAIT (MILLISECONDS)
function sayAlert(){
    alert("3 seconds have passed")
}
setTimeout( sayAlert , 3000)