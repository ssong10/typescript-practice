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
const personArray:[string,number,boolean] = ['eric',28,true]

// 3. AnyType
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


// 4. no type annotation
let myName = "Alice"
// myName = 123
// Type 'number' is not assignable to type 'string'.