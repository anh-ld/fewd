// destructuring assignment
[a, b] = [100, 200];
console.log(a, b);
({c, d} = {c: "Hanoi", d: "HCMC"});
console.log(c, d);

// rest pattern
[a, b, ... rest] = [100, 200, 300, 400, 700];
console.log(rest);
({c, d, ... rest2} = {c: "Hanoi", d: "Saigon", e: "Da Nang", f: "Hue", g: "Hoi An"});
console.log(rest2);

// parsed array from function
function people() {
  return ["Andy", "Becky", "Clarence"];
}
let [p1, p2, p3] = people();
console.log(p1, p2, p3);

// object destructuring
let person = {
  name: "John",
  age: 20,
  gender: "Male",
  sayHi: function() {
    // console.log(this);
    console.log("Hi, I'm " + this.name);
  }
}

let {name, age, gender, sayHi} = person;
console.log(name, age, gender);
sayHi(); // don't know wtf this.name is
person.sayHi();
