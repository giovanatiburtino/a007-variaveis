let idade
let nome

console.log(typeof idade)
console.log(typeof nome)

//foi impresso undefined porque não foi definido nenhum valor

idade = Number(prompt("Qual é sua idade?"))
nome = String(prompt("Qual é seu nome?"))

console.log(typeof idade, typeof nome)

//neste momento que foi inserido o prompt o tipo foi transformado para string
console.log("Olá", nome, "você tem", idade,"anos.")