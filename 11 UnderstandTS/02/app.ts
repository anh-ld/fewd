// string
const myName: string = 'AnhLD'

// number
const myAge: number = 24

// boolean
const isYoung: boolean = true

// multiple type
const myAge2: (number | string) = 27 

// array of string
const animals: string[] = ['cat', 'dog', 'duck', 'pig']

// array of any type
const misc: any[] = [1, 'Dog', true, {isHandsome: true}]

// array contains only string or number
const ages: (string | number)[] = [20, '24', 'twenty-two']

// array of string, number, boolean items in order
const myInfo: [string, number, boolean] = ['Duy-Anh', 24, true]

// enum - not available in javascript
enum Color { 
  Red, // 0
  Green,  // 1
  Blue // 2
}

const myColor: Color = Color.Red

// function
const getMyAge= (): number => {
  return myAge
}

const printHello = (): void => {
  console.log("Hello World. I am ironman.")
}

const calculate = (f: number, g: number): number => {
  return f + g
}

console.log(calculate(5, 6))

// function types
const calcReference: (v1: number, v2: number) => number = calculate

// object
const myInfo2: {name?: string, age?: number, isRich?: boolean} = {
  name: 'Duy Anh',
  age: 24,
  isRich: false
}

// type
type Info = {
  name?: string,
  age?: number,
  isRich?: boolean
}

const myInfo3: Info = {
  name: 'David',
  age: 50,
  isRich: true
}

// never
const neverReturn = (): never => {
  throw new Error('Something was wrong!!!')
}