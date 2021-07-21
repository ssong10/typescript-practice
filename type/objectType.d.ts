declare function sum(point: {
    x: number;
    y: number;
}): number;
declare function printName(obj: {
    first: string;
    last?: string;
}): void;
declare type Point = {
    x: number;
    y: number;
};
declare function printCoord(pt: Point): void;
declare type ID = number | string;
declare function printID(id: ID): void;
declare function sumTwoNumber(a: number, b: number): number;
declare function printArray(arr: string[]): void;
interface Person {
    name: string;
    age: number;
    student: boolean;
}
declare function Introduce(person: Person): void;
interface Animal {
    name: string;
}
interface Animal {
    age: number;
}
interface Bear extends Animal {
    honey: boolean;
}
declare const bear: Bear;
declare type Bird = {
    name: string;
};
declare type Bee = Bird & {
    honey: boolean;
};
