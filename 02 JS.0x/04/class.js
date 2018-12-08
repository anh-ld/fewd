// constructor function - ES5
function Person(name, age) { // name of func is capitalized by convention
  this.name = name;
  this.age = age;
  this.describe = function() {
    console.log(this.name + " is " + this.age);
  }
}

var p1 = new Person("DuyAnh", 20);
var p2 = new Person("Kenney", 30);

p1.describe();
p2.describe();
console.log(p1); // * p1 is an object

// ES6 class
class Player {
  constructor(name, age, team, role) {
    this.name = name;
    this.age = age;
    this.team = team;
    this.role = role;
    Player.playerCount++; // static property only sticks with the class, not the instances
  }
  // method works the same way with static property
  static introduce() {
    console.log(`Hi. My name is ${this.name}, ${this.age} years old. I'm playing ${this.role} at ${this.team}.`);
  }
}
// initial static property
Player.playerCount = 0;

var player1 = new Player("Pogba", 25, "ManUtd", "CM");
var player2 = new Player("Welbeck", 25, "ManUtd", "ST");
var player3 = new Player("De Gea", 27, "ManUtd", "GK");
player1.introduce();
console.log(Player.playerCount);
