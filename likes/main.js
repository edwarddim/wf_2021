console.log("hello")



function over(element){
    // console.log("OVER")
    // console.log(element)
    element.src = "images/mona-the-rivetertocat.png"
}

function out(element){
    // console.log("OUT")
    // console.log(element)
    element.src = "images/manufacturetocat.png"
}


function toggleImage(element){
    console.log(element.src)
    if(element.src.includes("images/mona-the-rivetertocat.png")){
        console.log("IF")
        element.src = "images/manufacturetocat.png"
    }
    else{
        console.log("ELSE")
        element.src = "images/mona-the-rivetertocat.png"
    }
}