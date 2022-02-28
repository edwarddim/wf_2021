console.log("Hello World")



// VANILLA JS METHODS
// alert("Welcome to my Page!!!")

// var response = confirm("Are you sure you want to do delete this???")

// console.log('RESPONSE: ', response)

// if(response){
//     console.log("I HOPE YOU KNOW WHAT YOU ARE DOING")
// }
// else{
//     console.log("THE THING WILL NOT BE DELETED")
// }


// EVENT HANDLER FUNCTION
// 1. DEFINE THE FUNCTION
function clickHandler(element){
    var h1 = document.querySelector("#container > h1")
    console.log("h1: ", h1)
    h1.classList.add("dark")
    h1.innerText = "CHANGED"
}

function loginHandler(element){
    console.log('YOU ARE BEING LOGGED IN')
    element.remove()
}

function logoutHandler(element){
    console.log('YOU ARE BEING LOGGED OUT')
    element.remove()
}

function overHandler(){
    console.log("HOVERING!!!!")
}

function hoverHandler(element){
    console.log(element)
}




// DOM MANIPULATION
console.log(document)


// Targeting HTML elements
var container = document.querySelector("#container")
console.log("CONTAINER: ", container)

