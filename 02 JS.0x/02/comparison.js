// simple comparison operator
var jsCourse = true;
if (jsCourse) {
  console.log("This is a JS Course");
} else {
  console.log("This is NOT a JS Course");
}

// comparison operator: < > <= >= == != === !==
// && and, || or

var age = 8;
if (age < 10) {
  console.log('You are a child');
} else if (age > 13 && age < 17) {
  console.log('You are a teenager');
}

// null vs undefined
var newVar = null;
if (newVar == undefined) {
  console.log("Same value");
} else if (newVar === undefined) {
  console.log("Same value and same type");
}

// NaN is equal to nothing, even itself
console.log(NaN == NaN);
console.log(NaN === NaN);

// isNaN
console.log(isNaN(0 / 0));

// short comparison
var x = 2;
var y = (x == 2) ? "X is 2" : "X is NOT 2";
console.log(y);

// random number from 0 to 6
var day = Math.round(6 * Math.random());
switch (day) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Week day! You gotta go to work!");
    break;
  default:
    console.log("Weekend! You need to relax!");
    break;
}
