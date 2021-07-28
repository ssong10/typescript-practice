interface User {
  name : string,
  age? : number,
}

function getUserName<T extends User>(users:T[]): string[]  {
  return users.map(user=>user.name)
}

getUserName([{name:'haha'},{name:'eric',age:27}])
// getUserName([{age:20}])

const man = {
  name : 'eric',
  age: 27,
}
const obj = {
  animal : 'cat'
}

function getValue<T,K extends keyof T>(obj:T,key:K): T[K] {
  return obj[key]
}
getValue(man,'name')
// getValue(obj,'name')
getValue(obj,'animal')