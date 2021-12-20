// The Math Library
var floor = Math.floor(1.8); // ROUNDING DOWN
var ceiling = Math.ceil( Math.PI ); // ROUNDING UP
var random = Math.random(); // 0 - 1
    
console.log(floor);
console.log(ceiling);
console.log(random);



// -----------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------//
// DICE ROLLER
// Using what we've learned about the Math library in JavaScript, 
// complete the following function that should return a value between 1 through 6 at random.
function d6() {
    var roll = Math.random();
    // your code here
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// -----------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------//
// CONSULT ORACLE
// Using the following array, write a function that will answer all of our questions by randomly choosing a response
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

function fortune(array){
    // YOUR CODE HERE
}

console.log(fortune(lifesAnswers))