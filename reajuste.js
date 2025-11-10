//6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

const prompt = require('prompt-sync')();

const valor = parseFloat(prompt("Digite um valor qualquer: "));

const total = (valor * 0.05) + valor;

console.log("O valor com reajuste de 5% é: " + total)