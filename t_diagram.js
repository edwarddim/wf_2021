// T-DIAGRAMS


var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
}
else {
    num1 = num1 / num2;
}
if (num1 < num2) {
    num1 = num1 * 2;
}
else if (num1 == num2) {
    num2 = num1 * num2;
}
else {
    num2 = num2 * 2;
}
console.log(num1);
console.log(num2);

// ---------------------------------------------------------------- //

x = 15
y = 30
z = 0

if(x >= 20 && y <=15){
    z = x * y
}
else if(x == 15 && y < 20){
    z = x + y
}
else if(x == 15 && y ==20){
    z = x* y
}
else{
    z * x/ y
}
z += x // z = z + x
z -= x
z *= x
z /= x
console.log(z)

x = x + 1 // x += 1

var age = 21

if(age >= 21){
    console.log("you can drink, smoke, and vote")
}
else if(age >= 18){
    console.log("you can vote")
}
else if(age >= 16){
    console.log("you can drive")
}
else{
    console.log("wait a little more")
}