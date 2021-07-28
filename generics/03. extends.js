"use strict";
function getUserName(users) {
    return users.map(function (user) { return user.name; });
}
getUserName([{ name: 'haha' }, { name: 'eric', age: 27 }]);
// getUserName([{age:20}])
var man = {
    name: 'eric',
    age: 27,
};
var obj = {
    animal: 'cat'
};
function getValue(obj, key) {
    return obj[key];
}
getValue(man, 'name');
// getValue(obj,'name')
getValue(obj, 'animal');
