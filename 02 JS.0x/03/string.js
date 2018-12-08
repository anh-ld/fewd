// string is an array of characters
// string is 'read-only' when working with brackets
// can not use push, pop, splice or add elements to string using non-existent index
// slice is OK

var s = 'Stephen Chow';
console.log(s);
console.log(s.length);

// add string to string
s += " is Hongkonger";
console.log(s);

// add string using concat()
s = s.concat(". He is 55.", " He is rich.");
console.log(s);

// get part of a string
var subS = s.slice(0, 12); // get string from index 0 to 12 - 1
console.log(subS);
var subS2 = s.substring(0, 12);
console.log(subS2);
var subS3 = s.substr(8, 4); // remove 4 chars from index 8
console.log(subS3);
