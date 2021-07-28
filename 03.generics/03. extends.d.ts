interface User {
    name: string;
    age?: number;
}
declare function getUserName<T extends User>(users: T[]): string[];
declare const man: {
    name: string;
    age: number;
};
declare const obj: {
    animal: string;
};
declare function getValue<T, K extends keyof T>(obj: T, key: K): T[K];
