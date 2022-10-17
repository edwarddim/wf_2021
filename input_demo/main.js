console.log("Hello world")


function chooseLunch(element){
    alert("You chose " + element.value)
}

var fullName = ""
function handleInput(element){
    fullName = element.value
}

function display(){
    alert("Hello, "+ fullName)
}


// ---------------------------------------------- //

// 1. CALLBACK FUNCTION
// 2. THE TIME PERIOD TO WAIT IN MILLISECONDS

function message(){
    var container = document.querySelector(".container")
    container.innerHTML = "<div>Pay for stuff</div>"
}

setTimeout(message, 5000)