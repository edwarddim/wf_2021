console.log("hello world")

var github_handle;

function handleChange(element){
    github_handle = element.value
    console.log(github_handle)
}


async function getCoderData() {
    // FETCHING THE GITHUB INFO FROM THE GITHUB API
    var response = await fetch("https://api.github.com/users/"+github_handle);
    var coderData = await response.json();
    console.log(coderData);
    console.log(coderData.name);
    console.log(coderData.location);

    // ONCE WE HAVE THE INFOMRATION, USE THAT INFORMATION TO DISPLAY ON THE HTML
    var name = document.querySelector("#name")
    name.innerText = coderData.name
}

// async function getCoderData() {
//     var response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=pasadena&appid=");
//     var coderData = await response.json();
//     console.log(coderData);
// }