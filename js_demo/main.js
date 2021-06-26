console.log("hello JS files connected")

// EVENT DRIVEN - INPUT DRIVEN

function handleClick(){
    confirm('the h1 has been clicked')
}


function changeColor(element){
    console.log(element)
    // element.remove()
    element.innerHTML = "changed"
    element.style.backgroundColor = "black"
    element.style.color = "white"
    
    // var h1 = document.querySelector("h1")
    // h1.style.backgroundColor = "black"
    // h1.style.color = "white"
    // h1.innerHTML = "CHANGING THE TEXT"
}


var click = 0
function toggleMode(element){
    // TOGGLE BETWEEN LIGHT AND DARK
    var container = document.querySelector(".container")
    // FIGURE OUT IF THE CONTAINER IS CURRENTLY IN DARK MODE OR LIGHT MODE
    if(container.classList.contains("light-mode")){
        // CONTAINER IS CURRENLTY IN LIGHT MODE, CHANGE TO DARK MODE
        container.classList.remove("light-mode")
        container.classList.add("dark-mode")
    }
    else{
        container.classList.remove("dark-mode")
        container.classList.add("light-mode")
    }
    // INCREAES COUNT OF CLICK AND SHOW THE NEW NUMBER
    click++
    element.innerHTML = `Toggle Mode ${click}`
}