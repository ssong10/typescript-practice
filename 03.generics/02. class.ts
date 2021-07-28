class Stack<T> {
  private data: T[] = [];
  constructor() {}
  push(item: T): void {
      this.data.push(item)
  }
  pop() : T | undefined {
    return this.data.pop();
  }
}

// 이런식으로 구현하게 되면 형태에 따른 스택을 만들어 다양하게 활용할 수 있습니다.

const numberStack = new Stack<number>();
const stringStack = new Stack<String>();
numberStack.push(1);
stringStack.push('a');