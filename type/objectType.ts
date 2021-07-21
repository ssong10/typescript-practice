// 1. object type

function sum(point: { x: number; y: number }) {
  return point.x + point.y
}

// 2. optional properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


// 3. Type Aliases
type Point = {
  x : number;
  y : number;
}

function printCoord(pt:Point) {
  console.log(`x:${pt.x}, y: ${pt.y}`)
}
printCoord({x:100,y:100})

// 4. Union Types
type ID = number | string;

function printID(id:ID){
  console.log(`ID : ${id}`)
}
printID(1025)
printID('LEE')


// 5. function Type
function sumTwoNumber(a:number,b:number): number {
  return a+b
}

function printArray(arr:string[]):void {
  console.log(arr.join(''))
}
printArray(['a','b','c'])

// 6. Interfaces
interface Person {
  name : string,
  age : number,
  student : boolean,
}
function Introduce(person:Person) {
  console.log(`이름 : ${person.name},
  나이 : ${person.age},
  학생 : ${person.student ? '학생' : '학생 아님'}`)
}

Introduce({name:'Lee',age:28,student:false})

// 7. difference between Aliases and Interfaces

// Interface
interface Animal { 
  name: string
}
// possible
interface Animal {
  age: number
}
// extend
interface Bear extends Animal {
  honey: boolean
}
const bear:Bear = {name:'bear',age:3,honey:true} // OK
// name 과 age, honey properties 를 다 갖추고 있어야 한다

// type Aliases
type Bird = {
  name: string
}
// error
// type Bird = {
//   age: number
// }
// extend
type Bee = Bird & { 
  honey: boolean 
}