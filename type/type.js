"use strict";
// 0. BasicPrimitive
var numberType = 1;
var stringType = 'string';
var booleanType = false;
// 1. Type
var undefinedType = undefined;
var objectType = {};
var nullType = null;
// 2. Array
var numberArray = [1, 2, 3];
var alphabetArray = ['a', 'b', 'c'];
var personArray = ['eric', 28, true];
// 3. AnyType
var obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
// 4. no type annotation
var myName = "Alice";
var hello = 'hello';
// error
// hello = 'hi'
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
// error 
// printText("G'day, mate", "centre");
