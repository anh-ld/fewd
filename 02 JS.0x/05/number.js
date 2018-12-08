// convert string to int
var string = "3.12334";
var newS = parseInt(string);
console.log(newS + " " + typeof(newS));
var newS2 = Math.round(string * 1); // or newS2 = (string * 1).toFixed(0)
console.log(newS2 + " " + typeof(newS2));

// convert string to float is the same using parseFloat

// convert number to exponential notation
var number = 29044.12343;
var newN = number.toExponential();
console.log(newN);

// convert number to string
var newN2 = number + "";
var newN3 = number.toString();
console.log(newN2 + " " + typeof(newN2));
console.log(newN3 + " " + typeof(newN3));
