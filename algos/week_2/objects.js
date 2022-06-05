// Objects - UNORDERED DATA STRUCTURE

var userInfo = {
    'fullName' : 'Edward Im',
    'age' : 31,
    'location' : 'Los Angeles',
    'marriageStatus' : false,
    'introduction' : function(){
        console.log(this.fullName)
        console.log(this.age)
        console.log(this.location)
        console.log(this.marriageStatus)
    }
}

var anotherUser = {
    'fullName' : 'Jane Doe',
    'age' : 33,
    'location' : 'SF',
    'marriageStatus' : false,
    'introduction' : function(){
        console.log(this.fullName)
        console.log(this.age)
        console.log(this.location)
        console.log(this.marriageStatus)
    },
    'address' : {
        'streetNumber' : 1234,
        'street' : "Something Way",
        'zipCode' : 12345
    }
}

anotherUser.address.zipCode

// BRACKET NOTATION
// console.log(userInfo['location'])

// DOT NOTATION
// console.log(userInfo.location)

// userInfo.introduction()
// anotherUser.introduction()


console.log(userInfo)
userInfo['password'] = "qwerty12345"
userInfo.address = "123 Something Way"
console.log("------------------------------------------------")
console.log(userInfo)

userInfo.age++
userInfo['age']++