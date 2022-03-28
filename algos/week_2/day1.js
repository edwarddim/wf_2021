var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);


// 1. DEFINE THE FUNCTION
function d6() {
    var roll = Math.random();
    // your code here

    return roll;
}

// 2. CALL THE FUNCTION
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

//-------------------------------------------------------------//
//-------------------------------------------------------------//
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// YOUR CODE GOES HERE
// 1. DEFINE THE FUNCTION
function oracle(array){
    
}

// 2. CALL THE FUNCTION
var answer = oracle(lifesAnswers)


