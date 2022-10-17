// ARRAYS - DATA STRUCTURE
// ORDERED DATA STRUCTURE
// INDEX - VALUE PAIRS
var array = ['a','b','c']
array[2]

// OBJECTS - DATA STRUTURE
// UNORDERED DATA STRUCTURE
// KEY - VALUE PAIRS
var userInfo = {
    'first_name' : "Edward",
    'last_name' : "Im",
    'age' : 32,
    'introduction' : function(){
        console.log("Hello my name is " + this.first_name + " " + this.last_name)
        console.log(`Hello my name is ${this.first_name} ${this.last_name}`)
    }
}

// BRACKET NOTATION
// console.log(userInfo['age'])
// console.log(userInfo['first_name'])
// console.log(userInfo['last_name'])

// DOT NOTATION
// console.log(userInfo.age)
// console.log(userInfo.first_name)
// console.log(userInfo.last_name)
// userInfo.introduction()

console.log(userInfo)
userInfo['test'] = false
console.log(userInfo)

delete userInfo.test

console.log(userInfo)