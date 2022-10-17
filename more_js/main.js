function darkMode(){
    // TARGET THE CONATINER
    var container = document.querySelector(".container")
    // REMOVE lite-mode
    container.classList.remove("lite-mode")

    // ADDING dark-mode CLASS
    container.classList.add("dark-mode")
}

function liteMode(){
    // TARGET THE CONTAINER
    var container = document.querySelector(".container")
    // REMOVE dark-mode
    container.classList.remove("dark-mode")
    // ADDING lite-mode CLASS
    container.classList.add("lite-mode")
}


function over(element){
    // console.log(element)
    element.src = "./images/main_img.png"
}

function out(element){
    element.src = "./images/building.png"
}

// function over(){
//     var element = document.querySelector(".splash")
//     element.src = "./images/main_img.png"
// }

// function out(){
//     var element = document.querySelector(".splash")
//     element.src = "./images/building.png"
// }