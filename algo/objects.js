// Array
var array = ['a','b','c']
// INDEX - VALUE
var person = ["Edward"]
console.log(person[0])


// Objects
// KEY - VALUE
var person = {
    "first_name" : "Edward",
    "last_name" : "Im",
    "age" : 31,
    "hair_color" : "black",
    "interests" : [
        {"personal_interest" : ["walking", "fast walking", "slow walking"]},
    ]
}
console.log(person.first_name)
console.log(person.age) // DOT NOTATION
console.log(person["age"]) // BRACKET NOTATION

// var p = document.querySelector("p")
// p.innerText  = "NEW TEXT"

person.first_name = "Ed"

console.log(person.interests[0].personal_interest.pop())