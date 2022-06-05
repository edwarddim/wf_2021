/* 
__     ___    _   _ ___ _     _        _          _ ____  
\ \   / / \  | \ | |_ _| |   | |      / \        | / ___| 
 \ \ / / _ \ |  \| || || |   | |     / _ \    _  | \___ \ 
  \ V / ___ \| |\  || || |___| |___ / ___ \  | |_| |___) |
   \_/_/   \_\_| \_|___|_____|_____/_/   \_\  \___/|____/ 
*/
// VANILLA JS METHODS

// alert("Welcome to my Page!!!")


// var response = confirm("Are you sure you want to delete this?")

// if(response){
//     console.log("OK HOPE YOU KNOW WHAT YOU ARE DOING")
// }
// else{
//     console.log("OK DELETE HAS BEEN CANCELLED")
// }


/* 
 ____   ___  __  __       ___ _   _ _____ ____   ___  
|  _ \ / _ \|  \/  |     |_ _| \ | |_   _|  _ \ / _ \ 
| | | | | | | |\/| |      | ||  \| | | | | |_) | | | |
| |_| | |_| | |  | |      | || |\  | | | |  _ <| |_| |
|____/ \___/|_|  |_|     |___|_| \_| |_| |_| \_\\___/ 
*/


// 1. DEFINING THE FUNCTION
function clickHandler(element){
    console.log("CLICK HANDLER FUNCTION")
    console.log(element)
    element.remove()
}


function darkMode(){
    // TARGETING AN HTML ELEMENT
    var h1 = document.querySelector("#container > h1")
    console.log(h1)

    // CHANGE THE TEXT COLOR TO WHITE
    h1.style.color = "white"
    // CHANGE THE BACKGROUND COLOR TO BLACK
    h1.style.backgroundColor = "black"
}

function liteMode(){
    // TARGETING AN HTML ELEMENT
    var h1 = document.querySelector("#container > h1")

    // CHANGE THE TEXT COLOR TO BLACK
    h1.style.color = "black"
    // CHANGE THE BACKGROUND COLOR TO WHITE
    h1.style.backgroundColor = "beige"
}


// 1. EVENT LISTENER - HTML
// 2. EVENT HANDLER FUNCTION - JavaScript

// METHOD - QUERY SELECTOR
var likes = 13
function likeHandler(){
    // INCREMENT LIKES
    likes++
    // TARGETING THE BUTTON USING QUERY SELECTOR
    var likesButton = document.querySelector(".likes")
    likesButton.innerText = likes + " Like(s)"
}


// METHOD - this
var likes2 = 37
function likeHandler2(element){
    // INCREMENT LIKES
    likes2++
    // ELEMENT REPRESENTS THE BUTTON
    element.innerText = likes2 + " Like(s)"
}


function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } 
    else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}




function loginHandler(){
    // TARGETING THE LOGIN BUTTON
    var button = document.querySelector("#login")
    // CHANGE THE BUTTON TEXT TO LOGOUT
    button.innerText = "LOGOUT"
}

function loginHandler2(element){
    element.innerText = "LOGOUT"
}