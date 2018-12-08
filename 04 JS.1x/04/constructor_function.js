const me = {
  name: 'Duy Anh',
  age: 20
}

// person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getBirthYear = function() {
    const now = new Date();
    const year = now.getYear();
    return (year - age + 1900);
  }
}

const d = new Person("Duy Anh", 22);
const a = new Person("Alice", 25);
console.log(d);
console.log(d.getBirthYear());
