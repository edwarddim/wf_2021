console.log("Hello World")




/* 
__     ___    _   _ ___ _     _        _          _ ____  
\ \   / / \  | \ | |_ _| |   | |      / \        | / ___| 
 \ \ / / _ \ |  \| || || |   | |     / _ \    _  | \___ \ 
  \ V / ___ \| |\  || || |___| |___ / ___ \  | |_| |___) |
   \_/_/   \_\_| \_|___|_____|_____/_/   \_\  \___/|____/ 
*/
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



/* 
 ____   ___  __  __       ___ _   _ _____ ____   ___  
|  _ \ / _ \|  \/  |     |_ _| \ | |_   _|  _ \ / _ \ 
| | | | | | | |\/| |      | ||  \| | | | | |_) | | | |
| |_| | |_| | |  | |      | || |\  | | | |  _ <| |_| |
|____/ \___/|_|  |_|     |___|_| \_| |_| |_| \_\\___/ 
*/
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




/* 
 ____   ___  __  __       __  __    _    _   _ ___ ____  _   _ _        _  _____ ___ ___  _   _ 
|  _ \ / _ \|  \/  |     |  \/  |  / \  | \ | |_ _|  _ \| | | | |      / \|_   _|_ _/ _ \| \ | |
| | | | | | | |\/| |     | |\/| | / _ \ |  \| || || |_) | | | | |     / _ \ | |  | | | | |  \| |
| |_| | |_| | |  | |     | |  | |/ ___ \| |\  || ||  __/| |_| | |___ / ___ \| |  | | |_| | |\  |
|____/ \___/|_|  |_|     |_|  |_/_/   \_\_| \_|___|_|    \___/|_____/_/   \_\_| |___\___/|_| \_|
                                                                                                
*/
// console.log(document)


// Targeting HTML elements
// var container = document.querySelector("#container")
// console.log("CONTAINER: ", container)


var likes = 13
function likeHandler(){
    // console.log("like button cliked")
    // alert("Ninja was liked")
    likes++
    // console.log("LIKES: ", likes)

    // DISPLAY THE CURRENT NUMBER OF LIKES ON THE HTML

    // 1. TARGET THE CORRECT HTML ELEMENT
    var h1 = document.querySelector(".top-likes")
    console.log(h1.innerText)
    // 2. CHANGE THE INNNER TEXT
    h1.innerText = likes + " likes"
}


var otherLikes = 34
function otherLikeHandler(){
    otherLikes++

    // 1. TARGET THE HTML
    var h1 = document.querySelector(".bottom-likes")
    // 2. CHANGE THE INNNER TEXT
    h1.innerText = otherLikes + " likes"
    h1.style.backgroundColor = "black"
    h1.style.color = "white"
}


function setActive(element) {
    console.log(element.classList)
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to dark mode";
        element.classList.remove("dark-mode");
        element.classList.add("light-mode")
    } else {
        element.innerText = "Switch to light mode";
        element.classList.remove("light-mode");
        element.classList.add("dark-mode");
    }
}



// TIMEOUT
// 1. CALLBACK FUNCTION
// 2. MILLISECONDS AMOUNT TO WAIT

function test(){
    console.log("4 seconds have passed")
}

// setTimeout( test, 4000)


// setTimeout(function(){
//     confirm("ARE YOU STILL WATCHING????")
// },2000)



function chooseLunch(element) {
    alert("You picked " + element.value);
}


// 
var nameTag = document.querySelector("#name-tag");

function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}