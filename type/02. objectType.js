"use strict";
// 1. object type
function sum(point) {
    return point.x + point.y;
}
// 2. optional properties
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function printCoord(pt) {
    console.log("x:" + pt.x + ", y: " + pt.y);
}
printCoord({ x: 100, y: 100 });
function printID(id) {
    console.log("ID : " + id);
}
printID(1025);
printID('LEE');
// 5. function Type
function sumTwoNumber(a, b) {
    return a + b;
}
function printArray(arr) {
    console.log(arr.join(''));
}
printArray(['a', 'b', 'c']);
function Introduce(person) {
    console.log("\uC774\uB984 : " + person.name + ",\n  \uB098\uC774 : " + person.age + ",\n  \uD559\uC0DD : " + (person.student ? '학생' : '학생 아님'));
}
Introduce({ name: 'Lee', age: 28, student: false });
var bear = { name: 'bear', age: 3, honey: true }; // OK
