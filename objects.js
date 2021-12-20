var array = ['a', 'b', 'c', 'd']

var emptyArray = []

var user = {
    "firstName" : "Edward",
    "lastName" : "Im",
    "email": "ed@gmail.com",
    "phoneNumber" : "213-123-4567",
    "age" : 31,
    "married" : false,
    "address" : {
        "streetAddres" : "123 Something Way",
        "city": "Los Angeles",
        "state" : "CA",
        "zipCode" : "91101"
    }
}

console.log(user.address.state)
console.log(user.address['state'])

// console.log(array[3])

console.log(user["firstName"]) // bracket notation
console.log(user.firstName) // dot notation

console.log(user['phoneNumber'])
console.log(user.phoneNumber)

user.age++

user.email = "edward@gmail.com"

// user['password'] = "feiwjao;23984u2389hfgueaifne"
user.password = "fiewoaj;fjeiwoa;"

console.log(user)