# TypeScript and Type

TypeScript 를 활용하기 위해서 js 타입이 어떤식으로 이루어져 있고 어떻게 적용을 하는지가 기본입니다.



## 01. Basic Type

기본적으로 핵심적인 type(`BasicPrimitive`) 으로는
  * string
  * number
  * boolean

세 가지 주로 사용하게 됩니다.
string 은 모든 문자열 "Hello, world" , "12" , "abc" 와 같은 Type을 말하게 되고

number 는 42 와 같은 숫자 뿐아니라 0, -1, 3.14 와 같은 정수, 소수 까지 통칭하게 됩니다.

boolean 은 true 와 false 에 해당하는 값이 들어갑니다.
* 기본적인 type
  ```typescript
  const numberType:number = 1
  const stringType:string = 'string'
  const booleanType:boolean = false
  const undefinedType:undefined = undefined
  const objectType:object = {}
  const nullType:null = null
  ```



## 02. Array

기본적으로 하나의 형태(type) 을 가지고 있는 Array를 표현할 수 있습니다
  ```typescript
const numberArray:number[] = [1,2,3]
const alphabetArray:string[] = ['a','b','c']
  ```



## 03. tuple

또한 tuple 과 같은 형식으로 인덱스에 맞춰 불변 구조로 맞춰 사용할 수 있습니다
  ```typescript
const personArray:[string,number,boolean] = ['eric',28,true]
  ```
-> 하지만 이런 식으로 사용할 경우는 대게 Array 의 특성이나 type을 활용할 수 없어 object나 generics type 을 이용하여 설계하게 됩니다.



## 04. enum

순서와 값을 매칭되어있는 타입입니다.

```typescript
enum Color { Red,Green, Blue}
let c : Color = Color.Green

// All True
// Color[0] === 'Red';
// Color['Red'] === 0;
// Color[1] === 'Green';
// Color['Green'] === 1;
// Color[2] === 'Blue';
// Color['Blue'] === 2;

```


## 05.any

* TypeScript 의 특별한 type 입니다.
* TypeScript에게 특정 코드 라인에 Type checking을 요구하지 않고 싶을 때 사용하게 됩니다
* 어떤값을 접근하거나 호출하거나 할당하여도 typescript 내에서 오류를 발생시키지 않습니다.
* TypeScript 를 쓰는 이유와 정반대의 느낌이라 협업에서는 type을 특정하게 지정해 주는 것을 권장합니다

```typescript
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```



### 06. Literal Types

특정 문자열이나, 숫자 등을 넣을 수 있는 형태입니다.

```typescript
type Hello = 'hello'
let hello:Hello = 'hello'
// hello = 'hi' -> #error

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); -> #error
```



## 07. Type 유추

위에서 사용한 것 처럼 변수에 대한 type 유형을 지정하는 주석을 설정할 수 있습니다.
```typescript
let myName:string = "Alice"
```

하지만 선언을 하는 경우, type annotation 을 달지 않아도 유추하여 type 을 지정해 줍니다.
```typescript
let myName = "Alice"
myName = 123
// 이렇게 작성을 하면 myName 이 string type 이 적용이 되어 myName 에 123을 재할당 하게 되면 아래와 같은 error 가 나오게 됩니다.

// Type 'number' is not assignable to type 'string'.
```



## 08. Object Type

* 위에서 선언했던 것과 같이 선언형으로 type을 정해줄 수 있습니다
  ```typescript
  function sum(point: { x: number; y: number }) {
    return point.x + point.y
  }
  ```

  
  
* Type Aliases

  ```typescript
  type point = {
      x : number;
      y : number;
  }
  function printCoord(pt:Point) {
    console.log(`x:${pt.x}, y: ${pt.y}`)
  }
  printCoord({x:100,y:100})
  ```

  

* Optional Properties 

  - object type 선언시 `?` 를 이용하여 해당 properties 를 선택적으로 받을 수 있습니다.

    ```typescript
    function printName(obj: { first: string; last?: string }) {
      // ...
    }
    // Both OK
    printName({ first: "Bob" });
    printName({ first: "Alice", last: "Alisson" });
    ```

  

### Union Types

  - 두개 이상의 type 을 union으로 묶어 주게 되고, 그 중 하나의 type 에만 만족해도 일치하는 type 으로 컴파일하는 방식
  - `|` 로 분기를 해서 type 을 적어주게 된다.

  ```typescript
    type ID = number | string;

    function printID(id:ID){
      console.log(`ID : ${id}`)
    }

    // Both OK
    printID(1025)
    printID('LEE')
  ```



### function Type

* 함수의 리턴값에 type을 지정해 줄수 있습니다.

- 함수 자체에 반환값이 없이 실행만 하게 된다면 void type으로 지정해줍니다.

```typescript
function sumTwoNumber(a:number,b:number): number {
  return a+b
}

function printArray(arr:string[]):void {
    console.log(arr.join(''))
}
```



### Interfaces

```typescript
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
```



### difference between Aliases and Interfaces

- type Aliases 는 extend 되거나 implement 될 수 없다 
  - `&` 를 이용하여 묶어주지만 이상적인 extend 형태

```typescript
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
type Bird = {
  age: number
}
// extend
type Bee = Bird & { 
  honey: boolean 
}
```



### Referrence

[typescriptlang](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)

[typescript - kr](https://typescript-kr.github.io/pages/tutorials/ts-for-js-programmers.html)