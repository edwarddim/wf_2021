console.log("hello world")


function changeHandler(element){
    if(element.name === "full_name"){
        var full_name = document.querySelector("#full_name")
        full_name.innerText = element.value
    }
    else if(element.name === "email"){
        var email = document.querySelector("#email")
        email.innerText = element.value
    }
    else{
        var password = document.querySelector("#password")
        password.innerText = element.value
    }
}


function dropdown(element){
    if(element.value === "fahrenheit"){
        var elementList = document.querySelectorAll(".weather")
        // console.log(elementList)

        for(var i = 0; i < elementList.length; i++){
            console.log(parseInt(elementList[i].innerText))
        }
    }
    else{
        var elementList = document.querySelectorAll(".weather")
        // console.log(elementList)

        for(var i = 0; i < elementList.length; i++){
            elementList[i].innerText = "20"
        }
        // var element = document.querySelector(".weather")
        // element.innerText = "some celsius value"
    }
}



// function message(name) {
//     console.log("Delayed message")
// }

// console.log("Start");
// setTimeout(message, 3000);
// console.log("End");