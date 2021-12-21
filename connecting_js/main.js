console.log("Hello World")
// VANILLA JS METHODS
// alert("Welcome to my PAGE!!!")


// var answer = confirm("Are you sure you want to do this???")
// console.log("ANSWER FROM USER: ", answer)

// if(answer){
//     console.log("YES THE USER WANTS TO DO SOMETHING")
// }
// else{
//     console.log("NO THE USER DOESN'T WANT TO DO SOMETHING")
// }



// QUERYSELECTOR
// console.log(document)


// EVENT LISTENER AND EVENT HANDLERS
var click = 0
function clickHandler(){
    click++
    console.log("You clicked this many times: ", click)
    // TARGET AND GRAB THE #title h1 FROM THE HTML
    var title = document.querySelector("#title")
    // MANIPULATE THE TITLE OBJECT
    title.innerText = "You have clicked this button " + click + " times" // STRING CONCAT
    title.innerText = `You have clicked this button ${click} times` // STRING INTERPOLATION
}


function changeImage(element){
    // var image = document.querySelector("img")
    element.src = "https://i.etsystatic.com/12960544/r/il/970b24/1315862380/il_794xN.1315862380_ru7u.jpg"
}


function changeColor(element){
    console.log(element)
    // element.innerText = "I've been clicked"
    // element.style.color = "red"
    // element.style.backgroundColor = "black"
    element.remove()
}

function inputHandler(element){
    // console.log("EXECUTING INPUT HANDLER")
    console.log(element.value)

    // TARGET THE HTML TO DISPLAY
    var name = document.querySelector("#displayBox > h1")

    // name.innerText = "Name: "
    // name.innerText += element.value

    name.innerText = `Name: ${element.value}`
}

function chooseLunch(element){
    console.log(element.value)
}



function checkUser(){
    var answer = confirm("Are you still watching??")
    if(answer){
        console.log("Keep playing")
    }
    else{
        console.log("Shut off Netflix")
    }
}

// 1. CALLBACK FUNCTION
// 2. THE AMOUNT OF MILLISECONDS YOU WANT TO WAIT
// setTimeout(checkUser, 5000)


// JAVASCRIPT FUNCTIONALITIES
// CHANGING IMAGES
// USE THE ALERT/CONFIRM WINDOW
// REMOVING ELEMENTS FROM THE HTML
// INCREASING THE COUNT OF THE CLICKS
// DISPLAY VALUES IN A GIVEN INPUT




// DARK MODE AND LIGHT MODE
function turnLight(){
    var container = document.querySelector("#container")
    container.classList.remove("dark-mode")
    container.classList.add("light-mode")
}

function turnDark(){
    var container = document.querySelector("#container")
    container.classList.remove("light-mode")
    container.classList.add("dark-mode")
}


function toggleMode(){
    var container = document.querySelector("#container")
    if(container.classList.contains("light-mode")){
        container.classList.remove("light-mode")
        container.classList.add("dark-mode")
    }
    else{
        container.classList.remove("dark-mode")
        container.classList.add("light-mode")
    }
}