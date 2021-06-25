console.log("hello JS files connected")

// EVENT DRIVEN - INPUT DRIVEN

function handleClick(){
    confirm('the h1 has been clicked')
}

function changeColor(){
    var h1 = document.querySelector("#header")
    h1.style.backgroundColor = "black"
    h1.style.color = "white"
    h1.innerHTML = "CHANGING THE TEXT"
}