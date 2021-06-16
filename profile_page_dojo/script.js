console.log("page loaded...");

function changeName(){
    var name = document.querySelector(".card-body h1")
    name.innerHTML = "John Doe"
}


function test(ele){
    console.log("TEST")
    var parent = ele.parentElement
    parent.classList.add("hidden")
    // ele.classList.add("hidden")
    // console.log(ele.parentElement)
}