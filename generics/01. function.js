"use strict";
// function generic
function first(arr) {
    return arr[0];
}
first([1, 2, 3]);
var obj_First = first([{ a: 'a' }, { b: 'b' }, { c: 'c' }]);
console.log(obj_First); // {a:'a'}
// more generics
function firstElement(arr1, arr2) {
    return [arr1[0], arr2[0]];
}
firstElement([1, 2, 3], ['a', 'b', 'c']); // [ 1, 'a']
