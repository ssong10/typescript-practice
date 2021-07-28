// function generic

function first<T>(arr:T[]): T {
  return arr[0]
}

first<number>([1,2,3])

const obj_First = first<object>([{a : 'a'}, {b:'b'}, {c:'c'}])
console.log(obj_First) // {a:'a'}

// more generics
function firstElement<T, U>(arr1: T[], arr2: U[]):[T,U] {
  return [arr1[0],arr2[0]]
}

firstElement<Number,String>([1,2,3],['a','b','c']) // [ 1, 'a']
