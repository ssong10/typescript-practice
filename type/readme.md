# TypeScript and Type

TypeScript 를 활용하기 위해서 js 타입이 어떤식으로 이루어져 있고 어떻게 적용을 하는지가 기본입니다.

## Basic Type

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

## Array

기본적으로 하나의 형태(type) 을 가지고 있는 Array를 표현할 수 있습니다
  ```typescript
    const numberArray:number[] = [1,2,3]
    const alphabetArray:string[] = ['a','b','c']
  ```

또한 tuple 과 같은 형식으로 인덱스에 맞춰 불변 구조로 맞춰 사용할 수 있습니다
  ```typescript
    const personArray:[string,number,boolean] = ['eric',28,true]
  ```
-> 하지만 이런 식으로 사용할 경우는 대게 Array 의 특성이나 type을 활용할 수 없어 object나 generics type 을 이용하여 설계하게 됩니다.


## any

TypeScript 의 특별한 type 입니다.
TypeScript에게 특정 코드 라인에 Type checking을 요구하지 않고 싶을 때 사용하게 됩니다 ( 그럴꺼면 왜 TS쓰나요 )
어떤값을 접근하거나 호출하거나 할당하여도 typescript 내에서 오류를 발생시키지 않습니다.

## Type 유추
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

## Object Type
* 위에서 선언했던 것과 같이 선언형으로 type을 정해줄 수 있습니다
  ```typescript
    function sum(point: { x: number; y: number }) {
      return point.x + point.y
    }
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

* Union Types
  - 두개 이상의 type 을 union으로 묶어 주게 되고, 그 중 하나의 type 에만 만족해도 일치하는 type 으로 컴파일하는 방식
  - `|` 로 분기를 해서 type 을 적어주게 된다.
  
  ```typescript
    function printId(id: number | string) {
      console.log(`ID : ${id}`)
    }
  ```

### Referrence
[typescriptlang](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)