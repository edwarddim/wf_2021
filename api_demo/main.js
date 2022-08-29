
var profile = ""

function handleName(element){
    // KEEP TRACK OF THE INPUT
    profile = element.value
}


const getInfo = async () => {
    // MAKES A REQUEST TO THE GITHUB API WITH THE USERNAME
    var response = await fetch("https://api.github.com/users/"+profile)
    // TURN THE RESPONSE INTO A JSON OBJECT
    response = await response.json()
    console.log(response)

    // TARGET HTML ELEMENTS AND REPLACE THE INNERTEXT
    var name = document.querySelector(".name")
    name.innerText = "Name: " + response.name
    
    // TARGET HTML ELEMENTS AND REPLACE THE INNERTEXT
    var id = document.querySelector(".id")
    id.innerText = "ID: " + response.id

    console.log(response.public_gists)
    console.log(response.public_repos)
}
