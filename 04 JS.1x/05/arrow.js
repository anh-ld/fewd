let hi = () => console.log("Hello World!!!");
let hello = () => "Hi Baby!!!";

// return an object
let person = () => ({name: "Duy Anh"});

// with single parameter
let introduce = name => console.log(`Hi, I am ${name}`);

// with multiple parameters
let introduce2= (name, age) => console.log(`Hi, I am ${name}. I'm ${age}`);

hi();
console.log(hello());
console.log(person());
introduce("Duy Anh");
introduce2("Duy Anh", 20);

let a = [1, 3, 5, 7, 9, 20];
a.forEach((item) => { console.log(item) });
