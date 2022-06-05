function changeHandler(element){
    console.log(element.value)


    // TARGET THE h1 WITH THE TEMP
    var todayHigh = document.querySelector(".today > .high")
    var todayLow = document.querySelector(".today > .low")

    var tomorrowHigh = document.querySelector(".tomorrow > .high")
    var tomorrowLow = document.querySelector(".tomorrow > .low")

    if(element.value == "C"){
        todayHigh.innerText = "24"
        todayLow.innerText = "18"

        tomorrowHigh.innerText = "24"
        tomorrowLow.innerText = "18"
    }
    else{
        todayHigh.innerText = "90"
        todayLow.innerText = "40"

        tomorrowHigh.innerText = "90"
        tomorrowLow.innerText = "40"
    }



    // var temps = document.querySelectorAll(".temp")
    // console.log(temps)

    // for(var i = 0; i < temps.length; i++){
    //     parseInt(temps[i].innerText)
    // }



}