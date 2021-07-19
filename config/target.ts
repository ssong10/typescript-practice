// target : "es5"
const copyArray = (arr:number[]) => {
  return [...arr]
}

let copy = copyArray([1,2,3])
console.log(copy)
