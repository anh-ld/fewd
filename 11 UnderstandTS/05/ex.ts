// Exercise 1 - How was your TypeScript Class?
class Car {
  public acceleration: number = 0

  constructor(public name: string) {}

  honk = () => {
    console.log("Toooooooooot!")
  }

  accelerate = (speed: number): void => {
    this.acceleration += speed
  }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class Obzect {
  private width: number = 0
  private length: number = 0

  constructor(width: number, length: number) {
    this.width = width
    this.length = length
  }

  calcSize = () => {
    return this.width * this.length
  }
}

var rectangle = new Obzect(5, 2)
console.log(rectangle.calcSize())

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person2 {
  private _firstName: string = ''

  get firstName() {
    return this._firstName
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value
    } else {
      this._firstName = ''
    }
  }
}

const person20 = new Person2()
console.log(person20.firstName);
person20.firstName = "Ma";
console.log(person20.firstName);
person20.firstName = "Maximilian";
console.log(person20.firstName);