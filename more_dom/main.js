function changeToLiteMode(){
    // WE NEED TO TARGET THE CONTAINER ELEMENT
    var containerElement = document.querySelector(".container")
    // REMOVE THE DARK MODE
    containerElement.classList.remove("dark-mode")
    // ADD THE LITE MODE
    containerElement.classList.add("lite-mode")
}

function changeToDarkMode(){
    // WE NEED TO TARGET THE CONTAINER ELEMENT
    var containerElement = document.querySelector(".container")
    // REMOVE THE LITE MODE
    containerElement.classList.remove("lite-mode")
    // ADD THE DARK MODE
    containerElement.classList.add("dark-mode")
}

function changeToCat(){
    // TARGET THE IMAGE
    var image = document.querySelector(".pic")
    // CHANGE THE src ATTRIBUTE TO CAT
    image.src = "./images/cat.jpg"
    image.alt = "cat picture"
}

function changeToDog(){
    // TARGET THE IMAGE
    var image = document.querySelector(".pic")
    // CHANGE THE src ATTRIBUTE TO DOG
    image.src = "./images/dog.jfif"
    image.alt = "dog picture"
}


function toggleImage(element){
    // SWAP OUT THE SRC WITH THE ALT-SRC
    var temp = element.src
    element.src = element.alt
    element.alt = temp
}