
// ARRAYS - ORDERED DATA STRUCTURE
// INDEX - VALUE PAIRS

// OBJECTS - UNORDERED DATA STRUCTURE
// KEY - VAUUE PAIRS


var userInfo = {
    firstName:"Edward",
    lastName:"Im",
    age:31,
    location:"Los Angeles, CA",
    interests : ['sports', 'sci-fi', 'exercise'],
    address:{
        streetNumber:233,
        streetName:"E Mallard",
        streetType: "Ave",
        zipCode: 81032
    },
    introduction: function(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    }
}

console.log(userInfo.address.streetName)

var array = []


// console.log(userInfo['firstName']) // BRACKET NOTATION
// console.log(userInfo.firstName) // DOT NOTATION

userInfo['hairColor'] = "black"
userInfo.eyeColor = "brown"

// console.log(userInfo.interests[0])
// console.log(userInfo.interests[1])
// console.log(userInfo.interests[2])


userInfo.interests.push("new interest")
for(var i = 0; i < userInfo.interests.length; i++){
    console.log(userInfo.interests[i])
}

var userArray = [
    {
        firstName:"John",
        lastName:"Doe"
    },
    {
        firstName:"Jane",
        lastName:"Doe"
    },
    {
        firstName:"Edward",
        lastName:"Im"
    }
]

userArray.push({
    firstName:"Roger",
    lastName:"Acevedo"
})

for(var i = 0; i < userArray.length; i++){
    // console.log(userArray[i].firstName + " " + userArray[i].lastName)
    console.log(`${userArray[i].firstName} ${userArray[i].lastName}`)
}