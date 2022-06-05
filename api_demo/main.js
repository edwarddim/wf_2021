console.log("hello world")



async function getDitto(){
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    var data = await response.json()
    // console.log(data)
    // console.log(data.abilities) // dot notation
    // console.long(data["abilities"]) // bracket notation

    // DISPLAY ID
    var id = document.querySelector(".id")
    id.innerHTML = `ID: ${data.id}`
    // DISPLAY WEIGHT
    var weight = document.querySelector(".weight")
    weight.innerHTML = `Weight: ${data.weight}`
    // DISPLAY SPRITE
    var sprite = document.querySelector(".sprite")
    sprite.src = data.sprites.front_default
    // console.log(data.id)
    // console.log(data.weight)
    // console.log(data.sprites.front_default)
}

async function getPortland(){
    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=portland&units=imperial&appid=GET YOUR OWN API KEY")
    var data = await response.json()
    console.log(data)
}