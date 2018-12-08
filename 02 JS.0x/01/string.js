var s = "Hello";
// don't mix ' and "
var s1 = 'Hello "My name is Andy"';
var s2 = "Hello I'm Andy";

var s3 = "My\nName\nIs\nAndy\\";
console.log(s3);

// concatenate strings using +
var s4 = s + " Andy Lau";
console.log(s4);

// concatenate strings using concat()
var s5 = s.concat(" Andy Lau");
console.log(s5);

// convert string to number
var s6 = "10000";
console.log("S6 is " + typeof(s6));
s6 *= 1;
console.log("S6 is " + typeof(s6));

// convert number to string
var s7 = 10000;
console.log("S7 is " + typeof(s7));
s7 += "";
console.log("S7 is " + typeof(s7));
