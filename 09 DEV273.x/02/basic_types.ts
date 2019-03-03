let x: string, y: number;
x = "This is a string"; // x = 3; throws an error
y = 5;

// array of type
let list: number[];
let listTwo: Array<number>;
list = [1,2,3];
listTwo = [1,2,5];

// tuple
let t: [string, boolean];
t = ['right', false]; // t = [false, 'ABC'] throws an error

// any - highly recommended not to use
let a: any;
let listThree: any[];
a = 1;
a = 'NotNumericAnymore';
listThree = [1, false, 'Something'];

// void: no types at all. mainly used as return type of functions that return nothing
function warn(): void {
  console.log("Warned");
}

// null and undefined
let u: undefined = undefined;
let n: null = null;

// assertion
let someValue: any = "a string";
let len: number = (someValue as string).length;