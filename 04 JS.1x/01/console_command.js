console.log("Hello World!!!");
console.error("Something is wrong");
console.warn("Hey, It's warning command!!!");

// console.clear(); // clear command screen

console.table({a:1, b:2});

// count the operating time
console.time("Bark");
  console.log("woof-woof");
  console.log("woof-woof");
  console.log("woof-woof");
  console.log("woof-woof");
  console.log("woof-woof");
  console.log("woof-woof");
console.timeEnd("Bark");
