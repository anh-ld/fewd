class Person {
  constructor(givenName, familyName) {
    this.givenName = givenName; // "normal name"
    this._familyName = familyName; // starts with "_"
  }
  get familyName() {
    return this._familyName.toUpperCase();
  }
  set familyName(newName) {
    // validation could be checked here such as
    // only allowing non numerical values
    this._familyName = newName;
  }
  walk() {
    return (this.givenName + ' ' + this._familyName + ' is walking.');
  }
}
let p1 = new Person('Michel', 'Buffa');
console.log(p1.familyName); // will display BUFFA in the devtool console
// this will call implicitly get familyName();
p1.familyName = 'Smith'; // this will call implicitly set familyName('Smith');
console.log(p1.familyName);
