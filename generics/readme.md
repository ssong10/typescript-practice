# Generic

제네릭은 어떤 클래스 혹은 함수에서 사용할 타입을 그 함수나 클래스를 사용할 때 결정하는 프로그래밍 기법을 말한다.

Java나 C++ 등의 정적 타입 언어에서는 함수 및 클래스를 선언하는 시점에서 매개변수 혹은 리턴 타입을 정의해야되기 때문에 기본적으로 다른 타입을 위해 재사용할 수가 없다

때문에 제네릭을 통해 함수와 클래스의 범용적인 사용을 가능하게 한다.

>  C# 과 Java 와 같이 재사용 가능한 구성 요소를 만들기 위하여 다양한 유형으로 작동할 수 있는 요소이다



## How 

그렇다면 언제 Generic 을 사용해야하나 판단하기가 어려운데 크게 두 가지 유형으로 구분하고 사용하시면 됩니다.

아래의 경우들에 generic 를 사용하면 보다 편하게 Typescript 를 적용하여 사용할 수 있습니다.

1. 구성요소
   * 하나 이상의 유형을 generic으로 사용을 하여 인자와 리턴값을 비슷한 꼴로 만들어야하는 경우
2. 반복
   * 자체 함수 뿐아니라 class 나 function 내부의 함수들에서 반복적으로 해당 유형을 사용할 경우



## Function

* 기본적인 함수로 배열을 인자로 받아 그 첫번째 요소를 출력하는 함수를 구현해야한다고 해봅니다.

* 배열의 요소가 number 인지 string 인지 object 인지 상관없이 `generic 없이` 구현을 한다고하면

    ```typescript
    function first(arr: any[]): any {
        return arr[0];
    }
    // 이런식으로 구현이 될겁니다.
    ```

* 하지만 `generic 을 사용`하게 되면

  ```typescript
  function first<TYPE>(arr:TYPE[]):TYPE {
      return arr[0];
  }
  first<number>([1,2,3]) // 1
  first<object>([{...}, {...}, {...}]) // {...}
  ```

  함수의 사용, 호출과 함께 generic 문법으로 type을 명확히 정해줄 수 있습니다.





## Class

클래스의 같은 경우 해당되는 생성자뿐 아니라 내장 함수들 까지도 generic 을 응용할 수 있습니다.

간단히 Stack 을 구현한다고 했을때 

```typescript
class Stack<T> {
    private data: T[] = [];
    constructor() {}
    push(item: T): void {
        this.data.push(item)
    }
    pop() : T {
        return this.data.pop();
    }
}

// 이런식으로 구현하게 되면 형태에 따른 스택을 만들어 다양하게 활용할 수 있습니다.

const numberStack = new Stack<number>();
const stringStack = new Stack<String>();
numberStack.push(1);
stringStack.push('a');
```





## 두개 이상의 제네릭

generic 함수나 class 에서 두 개 이상의 타입 변수도 사용할 수 있다.

```typescript
function firstElement<T, U>(arr1: T[], arr2: U[]):[T,U] {
  return [arr1[0],arr2[0]]
}
firstElement<Number,String>([1,2,3],['a','b','c']) // [ 1, 'a']

```



## 제네릭의 확장

```typescript
interface User {
  name : string,
  age? : number,
}

function getUserName<T extends User>(users:T[]): string[]  {
  return users.map(user=>user.name)
}

// correct
getUserName([{name:'haha'},{name:'eric',age:27}])

// wrong
getUserName([{age:20}])
```

User 를 extends 하는 T 를 사용하게 된다면 해당하는 T 는 User에 해당하는 interface 를 가져야 합니다.

name 을 필수로 가진 object[] 가 들어와야 Type error 가 나지않습니다.



## keyof

```typescript
const man = {
  name : 'eric',
  age: 27,
}
const obj = {
  animal : 'cat'
}

function getValue<T,K extends keyof T>(obj:T,key:K): T[K] {
  return obj[key]
}
getValue(man,'name') // 'eric'
getValue(obj,'name') // obj 에 'name' 이라는 key 가 없어서 error 가 발생합니다
getValue(obj,'animal') // 'cat'
```

K 가 keyof T 의 확장형 입니다.

T 의 key 인 enum 형태로 받아지게 되고

T 에 해당하지 않는 key 값으로 K 가 들어가게 되면 Type error 가 발생합니다.

리턴값은 `T[K]` 라고 쓰게 되고 T object 의 K property(value) 를 반환하게 됩니다.