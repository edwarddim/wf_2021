var likes_arr = [0,0,0]

function clickHandler(index){
    likes_arr[index] += 1
    var likes = likes_arr[index]
    var className = `.comment_${index}`
    var likes_text = document.querySelector(className)
    likes_text.innerHTML = `${likes} like(s) `
}