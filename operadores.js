//Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));




console.log(`A soma do número ${num1} e o número ${num2} é:` + (num1 + num2));
console.log(`A subtração do número ${num1} e o número ${num2} é:` + (num1 - num2));
console.log(`A multiplicação do número ${num1} e o número ${num2} é:` + (num1 * num2));
console.log(`A divisão do número ${num1} e o número ${num2} é:` + (num1 / num2));





