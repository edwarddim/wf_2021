
// INDEX - VALUES

var array = ['a', 'b', 'c', 'd']

console.log(array[2])

// UNORDERED DATA STRUCTURES
// KEYS - VALUES
var userInfo = {
    "firstName" : "Edward",
    "lastName" : "Im",
    "password" : "awesomepassword12345",
    "age" : 31,
    "interest" : ["sports", "music", "games"]
}

// ACCESS
console.log(userInfo["lastName"])
console.log(userInfo.lastName)

console.log(userInfo["age"])
console.log(userInfo.age)

console.log(userInfo['interest'][2])
console.log(userInfo.interest[2])
console.log(userInfo.interest)

// CREATING KEY-VALUE PAIR
userInfo["dob"] = "10/08/1990"

userInfo.interest.push("D&D")
userInfo.interest.pop()