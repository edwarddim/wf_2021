console.log("hello world")


// alert("Are you seeing this?")


// var answer = confirm("Do you want to accept all cookies????")

// console.log(answer)

// if(answer){
//     console.log("the user clicked on YES")
// }
// else{
//     console.log("the user clicked on NO")
// }

var clicked = 0
var countOne = 0
var countTwo = 0
// DEFINING THE FUNCTION
function clickFunction(element){
    // console.log(element.id)
    if(element.name === "button_one"){
        countOne++
        // console.log("COUNT ONE: ", countOne)
        element.innerText = "I have been clicked " + countOne
    }
    else{
        countTwo++
        // console.log("COUNT TWO: ", countTwo)
        element.innerText = "I have been clicked " + countTwo
    }
    clicked++
    console.log(clicked)
}


// function clickOne(){
//     countOne++
// }

// function clickTwo(){
//     countTwo++
// }


function lightMode(){
    console.log("LIFGHT MODE")
    var container = document.querySelector("#container")
    container.classList.remove("dark-mode")
    container.classList.add("light-mode")
}

function darkMode(){
    console.log("DARK MODE")
    var container = document.querySelector("#container")
    container.classList.remove("light-mode")
    container.classList.add("dark-mode")
}