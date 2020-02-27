// class
class Person {
  private type: string = 'XYZ';
  protected age: number = 20;

  constructor(public name: string, public username: string) {

  }

  printAge(): void {
    console.log(this.age)
  }

  setType(type: string): void {
    this.type = type
    console.log(this.type)
  }
}

console.log('----CLASS----');
const person0 = new Person('Duy Anh', 'anhld');
console.log(person0);
person0.printAge();

// inheritance
class Boy extends Person {
  constructor(username: string) {
    super("Boy", username);
    this.age = 50;
  }

  printAge(): void {
    console.log(this.age, " and something.")
  }
}

console.log('----INHERITANCE----');
const boy = new Boy('iamnotaboy');
console.log(boy);
boy.printAge();

// getters and setters
class Plant {
  private _species: string = 'Default';

  set species(value: string) {
    if (value.length > 3) {
      this._species = value
    }
  }

  get species() {
    return this._species;
  }
}

console.log('----GETTER&SETTER----');
let plant  = new Plant();
console.log(plant.species);
plant.species = 'Some';
console.log(plant.species);

// static
class Girl {
  static gender: string = 'Female';
  static say = () => {
    console.log('Hello, I am a girl.');
  }
}

console.log('----STATIC----');
console.log(Girl.gender);
Girl.say();

// abstract
abstract class Dad {
  name: string = 'Dad';
  money: number = 0;

  abstract changeName(name: string): void;

  showMoney() {
    return this.money;
  }
}

class Son extends Dad {
  changeName(name: string): void {
    this.name = name;
  }
}

console.log('----ABSTRACT----');
const sonson = new Son();
console.log(sonson);
sonson.changeName('Mbappe');
console.log(sonson);

// singleton
class One {
  private static instance: One

  private constructor(private name: string) {}

  static getInstance() {
    if(!One.instance) {
      One.instance = new One('One-Two');
    }
    return One.instance
  }
}

console.log('-----SINGLETON-----');
console.log(One.getInstance())