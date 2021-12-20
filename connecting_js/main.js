console.log("Hello World")
// VANILLA JS METHODS
// alert("Welcome to my PAGE!!!")


// var answer = confirm("Are you sure you want to do this???")
// console.log("ANSWER FROM USER: ", answer)

// if(answer){
//     console.log("YES THE USER WANTS TO DO SOMETHING")
// }
// else{
//     console.log("NO THE USER DOESN'T WANT TO DO SOMETHING")
// }



// QUERYSELECTOR
// console.log(document)


// EVENT LISTENER AND EVENT HANDLERS
var click = 0
function clickHandler(){
    click++
    console.log("You clicked this many times: ", click)
    // TARGET AND GRAB THE #title h1 FROM THE HTML
    var title = document.querySelector("#title")
    // MANIPULATE THE TITLE OBJECT
    title.innerText = "You have clicked this button " + click + " times" // STRING CONCAT
    title.innerText = `You have clicked this button ${click} times` // STRING INTERPOLATION
}


function changeImage(element){
    // var image = document.querySelector("img")
    element.src = "https://i.etsystatic.com/12960544/r/il/970b24/1315862380/il_794xN.1315862380_ru7u.jpg"
}


function changeColor(element){
    console.log(element)
    // element.innerText = "I've been clicked"
    // element.style.color = "red"
    // element.style.backgroundColor = "black"
    element.remove()
}