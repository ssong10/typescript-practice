"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// target : "es5"
var copyArray = function (arr) {
    return __spreadArray([], arr);
};
var copy = copyArray([1, 2, 3]);
console.log(copy);
