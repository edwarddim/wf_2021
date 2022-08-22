
function liteMode(){
    var container = document.querySelector("#container")
    container.classList.remove("dark-mode")
    container.classList.add("lite-mode")
}

function darkMode(){
    var container = document.querySelector("#container")
    container.classList.remove("lite-mode")
    container.classList.add("dark-mode")
}

function changeImage(){
    var image = document.querySelector("#container > img")
    image.src = "./images/pirate.webp"
}

function revertImage(){
    var image = document.querySelector("#container > img")
    image.src = "./images/unnamed.png"
}


var count = 0
function addCount(){
    count++
    console.log(count)
    var h1 = document.querySelector("#output")
    // var text = "You've clicked " + count + " times!!!"
    // h1.innerText = text
    h1.innerText = `You've clicked ${count} times!!`
}

var count_lower = 0
function addCountLower(){
    count_lower++
    var h1 = document.querySelector("#output_lower")
    h1.innerText = `You've clicked ${count_lower    } times!!`
}