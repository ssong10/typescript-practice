"use strict";
function sum(point) {
    return point.x + point.y;
}
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
var div = document.createElement('div');
