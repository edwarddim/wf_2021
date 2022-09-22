// API - APPLICATION PROGRAMMING INTERFACE

var handle = ""
function inputHandler(element){
    handle = element.value
}


async function getAPIInfo(){
    // FETCH - FUNCTION THAT ALLOWS US TO MAKE HTTP REQUESTS
    // var response = await fetch("https://api.github.com/users/" + handle)
    var response = await fetch(`https://api.github.com/users/${handle}`)
    response = await response.json()

    console.log(response)
    var nameElement = document.querySelector(".name")
    nameElement.innerText = response['name']

    var locationElement = document.querySelector(".location")
    locationElement.innerText = response.location

    var idElement = document.querySelector(".id")
    idElement.innerText = response.id
}
