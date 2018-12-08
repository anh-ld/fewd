// reference object
var x = 2; // x contain the value of 2
var y = { a: 5}; // y contain the "address" of an object in the memory

var x1 = x;
var y1 = y; // y, y1, y2 now point to the same obj
var y2 = y;

x1 = 3;
console.log(`x is now ${x} and x1 is now ${x1}`);

y1.a = 20;
y2 = { a: 50} // y2 now points to another obj
console.log(`y.a is now ${y.a} and y1.a is now ${y1.a} and y2.a is ${y2.a}`);

// JS is a pass by value language
function sum(a, b) {
  a += b;
  return a;
}
console.log(sum(x, 2));
console.log(x);

// compare 2 objects
var z = {a: 20};
var z1 = z;
var z2 = {a: 20};
console.log(z === z1); // true because they 2 point to the same obj
console.log(z === z2); // they 2 look identical but false, bc they point to not the same obj
