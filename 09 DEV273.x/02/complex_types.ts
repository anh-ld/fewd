// interface
interface LabelledValue {
  label: string
}

// optional props
interface Ball {
  color? : string,
  length? : number
}

// readonly props
interface Point {
  readonly color: string
}

// excess props
interface Circle {
  color? :string,
  width? :number,
  [propName: string]: any
}

// describe function type
interface Search {
  (source: string, subString: string): boolean;
}

function printLabel(labelObj: LabelledValue): void {
  console.log(labelObj.label);
}

let obj = { label: "A Label", count: 1 };
printLabel(obj);