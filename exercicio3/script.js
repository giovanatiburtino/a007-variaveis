let a = 30
let b = 15

console.log("a", a, "b", b)

let auxiliar = a
a = b
b = auxiliar

console.log("auxiliar:", auxiliar)
console.log("o novo valor de a é", a)
console.log("o novo valor de b é", b)