
// FETCH function

// fetch("https://api.openweathermap.org/data/2.5/weather?lat=34.0522&lon=118.2437&appid=ee3c9c6ce2ffbf2d0672687edcf94f74")
//     .then(res => res.json()) // SUCCESSFUL RESPONSE
//     .then(response => {
//         var h1 = document.querySelector("#container > h1")
//         h1.innerText = response.name
//         console.log("RESPONSE: ", response.name)
//         console.log("RESPONSE: ", response.id)
//         console.log("RESPONSE: ", response.timezone)
//     })
//     .catch(err => console.log("ERROR: ", err)) // UNSUCESSFUL RESPONSE

var github_handle
function inputHandler(element){
    github_handle = element.value
}

function apiCall(){
    fetch("https://api.github.com/users/"+github_handle)
        .then(res => res.json()) // SUCCESSFUL RESPONSE
        .then(data => {
            var h1 = document.querySelector("#container > h1")
            h1.innerText = data.name
        
            var h2 = document.querySelector("#container > h2")
            h2.innerText = data.location
        
            var h3 = document.querySelector("#container > h3")
            h3.innerText = data.id
        })
        .catch(err => console.log("ERROR: ", err)) // UNSUCESSFUL RESPONSE
}

// ASYNC / AWAIT
// async function apiCall(){
//     var response = await fetch("https://api.github.com/users/" + github_handle)
//     var data = await response.json()
//     console.log("RESPONSE: ", data)
//     // console.log(data.name)
//     // console.log(data.id)
//     // console.log(data.location)

//     var h1 = document.querySelector("#container > h1")
//     h1.innerText = data.name

//     var h2 = document.querySelector("#container > h2")
//     h2.innerText = data.location

//     var h3 = document.querySelector("#container > h3")
//     h3.innerText = data.id
// }