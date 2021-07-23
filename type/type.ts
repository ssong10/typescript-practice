// 0. BasicPrimitive
const numberType:number = 1
const stringType:string = 'string'
const booleanType:boolean = false

// 1. Type
const undefinedType:undefined = undefined
const objectType:object = {}
const nullType:null = null

// 2. Array
const numberArray:number[] = [1,2,3]
const alphabetArray:string[] = ['a','b','c']

// 3. tuple
const personArray:[string,number,boolean] = ['eric',28,true]

// 4. enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
// Color[0] === 'Red';
// Color['Red'] === 0;
// Color[1] === 'Green';
// Color['Green'] === 1;
// Color[2] === 'Blue';
// Color['Blue'] === 2;
// enum은 위와 같이 모두 성립되게 할 수 있는 type이다.

// 5. AnyType
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// 6. no type annotation
let myName = "Alice"
// myName = 123
// Type 'number' is not assignable to type 'string'.


// 7. Literal Types 
type Hello = 'hello'
let hello:Hello = 'hello'
// error
// hello = 'hi'

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// error 
// printText("G'day, mate", "centre");