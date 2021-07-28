"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = [];
    }
    Stack.prototype.push = function (item) {
        this.data.push(item);
    };
    Stack.prototype.pop = function () {
        return this.data.pop();
    };
    return Stack;
}());
// 이런식으로 구현하게 되면 형태에 따른 스택을 만들어 다양하게 활용할 수 있습니다.
var numberStack = new Stack();
var stringStack = new Stack();
numberStack.push(1);
stringStack.push('a');
