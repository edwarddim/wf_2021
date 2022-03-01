// console.log("hello")

var likes = 200000000
function clickHandler(){
    console.log("CLICK HANDLER")
    // INCREMENTING LIKES ON EVERY BUTTON CLICK
    likes++

    // TARGET THE h1 TO CHANGE THE NUMBER OF LIKES
    var h1 = document.querySelector("#first_likes")
    h1.innerText = likes + " likes"
}

