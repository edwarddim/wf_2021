console.log("hello world")


var github_handle;

function inputHandler(element){
    // console.log(element.value)
    github_handle = element.value
}

async function apiCall(){
    // FETCH API INFORMATION FROM GITHUB
    var response = await fetch("https://api.github.com/users/"+github_handle)
    var data = await response.json()
    console.log("after fetch")
    console.log(data)
    console.log(data.name)
    console.log(data.location)
    console.log(data.login)

    var name = document.querySelector("#container > h1")
    var location = document.querySelector("#container > h2")
    var login = document.querySelector("#container > h3")

    name.innerText = data.name
    location.innerText = data.location
    login.innerText = data.login
}


