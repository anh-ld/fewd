// ES6 class
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}.`
  }

  birthYear() {
    let now = new Date();
    let currentYear = now.getYear();
    let birth = currentYear - this.age + 1900;
    return `Mary was born in ${birth}.`;
  }

  getsMarried(marriedName) {
    this.lastName = marriedName;
  }

  static staticFunc() {
    return "Call this function using Class, not an Instance.";
  }
}

let mary = new Person("Mary", "Do", 30);
console.log(mary);

console.log(mary.greeting());
console.log(mary.birthYear());

mary.getsMarried("Taylor");
console.log(mary.greeting());

console.log(Person.staticFunc());

// sub class
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
}

let coleen = new Customer("Coleen", "Tran", "444-4444", "VIP");
console.log(coleen);
console.log(coleen.greeting());
