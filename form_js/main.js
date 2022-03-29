console.log("hello world")



// TIMEOUT
// 1. Callback function
// 2. The amount of time to wait


// 1. DEFINE THE FUNCTION
function sayHello(){
    // alert()
    // confirm()
}

setTimeout( sayHello , 5000 )


function chooseLunch(element){
    console.log(element.value)
}




var nameTag = document.querySelector("#name-tag");
function setName(element) {
    // console.log(element.value);
    nameTag.innerText = element.value;
}