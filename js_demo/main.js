

var count = 0
function clicked(){
    count++
    // GRABBING THE H1 ELEMENT
    var element = document.querySelector(".header")
    // console.log(element)
    // DISPLAY TO THE USER THE COUNT
    // element.innerText = "You clicked " + count + " times!"
    element.innerText = `You clicked ${count} times!`
}

function remove(element){
    element.remove()
}


function removeCookies(){
    var element = document.querySelector(".cookieBox")
    element.remove()
}

var count2 = 0
function buttonClick(element){
    count2++
    element.innerText = `You clicked ${count2} times!`
}