function sum(point: { x: number; y: number }) {
  return point.x + point.y
}

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
