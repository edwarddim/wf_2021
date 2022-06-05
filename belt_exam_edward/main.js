
function leftClick(){
    // GRAB THE IMAGE ELEMENT
    var image = document.querySelector(".carousel_image")
    // CHANGE THE SRC OF THE IMAGE NINJA PIXEL 2
    image.src = "images/pixel-ninjas-2.png"
}
function rightClick(){
    // GRAB THE IMAGE ELEMENT
    var image = document.querySelector(".carousel_image")
    // CHANGE THE SRC OF THE IMAGE STONEPUNK
    image.src = "images/stonepunk.png"
}

function linuxAlert(){
    alert("GAME IS SUPPORTED ON LINUX")
}

var shopping = 0

function addToCart(){
    shopping++
    var cart_num = document.querySelector("#cart_number")
    cart_num.innerHTML = shopping
}