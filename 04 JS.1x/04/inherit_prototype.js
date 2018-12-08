// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting prototype
Person.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}.`;
}

// instance
let p1 = new Person("Paul", "Pogba");
console.log(p1.greeting());

// Customer constructor
function Customer(firstName, lastName, phoneNumber, membership) {
  Person.call(this, firstName, lastName); // inherit from Person

  this.phoneNumber = phoneNumber;
  this.membership = membership;
}

// Inherit prototype from Person
Customer.prototype = Object.create(Person.prototype);

// Make inherited prototype to Customer prototype
Customer.prototype.constructor = Customer;

// instance
let c1 = new Customer("David", "Loye", "123-456", "Standard");
console.log(c1);
console.log(c1.greeting());
