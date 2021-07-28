declare class Stack<T> {
    private data;
    constructor();
    push(item: T): void;
    pop(): T | undefined;
}
declare const numberStack: Stack<number>;
declare const stringStack: Stack<String>;
