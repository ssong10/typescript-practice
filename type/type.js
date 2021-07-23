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
// 3. tuple
var personArray = ['eric', 28, true];
// 4. enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Color[0] === 'Red';
// Color['Red'] === 0;
// Color[1] === 'Green';
// Color['Green'] === 1;
// Color[2] === 'Blue';
// Color['Blue'] === 2;
// enum은 위와 같이 모두 성립되게 할 수 있는 type이다.
// 5. AnyType
var obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
// 6. no type annotation
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
