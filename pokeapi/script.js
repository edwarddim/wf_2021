var pokename = ''
var pokeContainer = document.querySelector('#poke-container')

function getPokename(element) {
  console.log(element.value)
  pokename = element.value
}

function makePokeCard(data) {
  var card =
`<div class="card">
  <h5 class="card-header">${data.name}</h5>
  <img class="card-img-top" src="${data.sprites.front_default}" />
  <div class="card-body">
    <p>${data.types[0].type.name}</p>
  </div>
</div>`
  return card
}

async function search(event) {
  // no refresh
  event.preventDefault()

  // api call
  var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)

  // turn response from json into javascript object
  var pokeData = await response.json()

  // see what it looks like
  console.log(pokeData)

  // inject into DOM
  pokeContainer.innerHTML = makePokeCard(pokeData) + pokeContainer.innerHTML
}