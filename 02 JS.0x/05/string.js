var s = "Wow Wow Wow!";

var newS = s.toUpperCase();
console.log(newS);
var newS2 = s.toLowerCase();
console.log(newS2);

var newC = s.indexOf("w"); // return the first index of "w"
console.log(newC);
var newC2 = s.lastIndexOf("w"); // return the last index of "w"
console.log(newC2);

var newC3 = s.charAt(8); // return the char at index of 8
console.log(newC3);

// these 3 below are the same
var newS3 = s.substr(1, 3);
var newS4 = s.substring(1, 4);
var newS5  = s.slice(1, 4);
console.log(newS3 === newS4);
console.log(newS3 === newS5);

// split string
var newS6 = s.split(" "); // splited by " "
console.log(newS6);
newS6 = newS6.join("----");
console.log(newS6);
