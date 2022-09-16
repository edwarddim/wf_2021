

var likes = 0
function clickHandler(){
    // INCREMENT THE LIKES BY 1
    likes++
    // CHANGE THE HTML TO REFLECT THE NEW LIKES
    var h1_element = document.querySelector(".likes")
    h1_element.innerText = `You have cliked this button ${likes} likes times`
    // h1_element.innerText = "You have cliekd this button " + likes + " times"
}

function headerHandler(element){
    console.log(element)
    element.remove()
}

function imageDelete(element){
    element.remove()
}