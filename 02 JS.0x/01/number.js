var n1 = 0xFF; // hex value
console.log(n1);

var n2 = 023; // octal value
console.log(n2);

// special value: +infinity, -infinity, NaN

var n3 = 0 / 0; // NaN
console.log(n3);

var n4 = 1e309; // Infinity
console.log(n4);

// numbers are represented with 64bit format

var b = (0.1 + 0.2 == 0.3); // 0.1 + 0.2 = 0.3000...4
console.log(b);
