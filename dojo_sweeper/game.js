var theDojo = [[1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
[3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
[5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
[2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
[6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
[0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
[0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
[2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
[5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
[9, 2, 2, 2, 0, 7, 0, 1, 1, 0]];

var validAdjArr = []
var testObj = {}

var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game

function rerender(theDojo){
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            for(var k = 0; k < validAdjArr.length; k++){
                console.log(validAdjArr[k].i, validAdjArr[k].j)
                if(i == validAdjArr[k].i && j == validAdjArr.j){
                    result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)">${validAdjArr[i][j]}</button>`;
                    console.log("building NUMBERS")
                }
                else{
                    result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
                }
            }
        }
    }
    console.log("-------------------------------------------------")
    console.log("ADJACENT SQUARES")
    console.log("-------------------------------------------------")
    console.log(validAdjArr)
    validAdjArr = []
    // console.log("RESUTLS")
    // console.log(result)
    return result;
}

function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
      for(var j=0; j<theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
      }
    }
    console.log(validAdjArr)
    validAdjArr = []
    return result;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    console.log({ i, j });
    //   CHECK FOR LEFT ADJ
    if(i - 1 > -1){
        validAdjArr.push({"i" : i - 1,"j" : j})
    }
    //   CHECK FOR RIGHT ADJ
    if(i + 1 < 10){
        validAdjArr.push({"i" : i + 1,"j" : j})
    }
    //   CHECK FOR TOP ADJ
    if(j - 1 > -1){
        validAdjArr.push({"i" : i,"j" : j - 1})
    }
    //   CHECK FOR BOTTOM ADJ
    if(j + 1 < 10){
        validAdjArr.push({"i" : i,"j" : j + 1})
    }

    //   CHECK FOR TOP LEFT CORNER ADJ
    if(i - 1 > -1 && j - 1 > -1){
        validAdjArr.push({"i" : i - 1,"j" : j - 1})
    }
    //   CHECK FOR TOP RIGHT CORNER ADJ
    if(i + 1 < 10 && j - 1 > -1){
        validAdjArr.push({"i" : i + 1,"j" : j - 1})
    }
    //   CHECK FOR BOTTOM LEFT CORNER ADJ
    if(i - 1 > -1 && j + 1 < 10){
        validAdjArr.push({"i" : i - 1,"j" : j + 1})
    }
    //   CHECK FOR BOTTOM RIGHT CORNER ADJ
    if(j + 1 < 10 && i + 1 < 10){
        validAdjArr.push({"i" : i + 1,"j" : j + 1})
    }

    var totalNinjas = 0
    for(var coord of validAdjArr){
        totalNinjas += theDojo[coord.i][coord.j]
    }
    alert(totalNinjas)
    render(theDojo)

    //   alert("TODO - determine how many ninjas are hiding in adjacent squares");
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);

