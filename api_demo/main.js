console.log("hello world")

var github_handle
function inputHandler(element){
    // console.log(element.value)
    github_handle = element.value
}


async function apiCall(){
    var response = await fetch("https://api.github.com/users/" + github_handle)
    var data = await response.json()
    console.log("RESPONSE: ", data)
    // console.log(data.name)
    // console.log(data.id)
    // console.log(data.location)

    var h1 = document.querySelector("#container > h1")
    h1.innerText = data.name

    var h2 = document.querySelector("#container > h2")
    h2.innerText = data.location

    var h3 = document.querySelector("#container > h3")
    h3.innerText = data.id


}