//5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse 
//usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

function somar(valor1, valor2){
    console.log(valor1 + valor2)
}


function valorSalario(){

const prompt = require('prompt-sync')();

const salario = parseFloat(prompt("Digite seu salário: "));

const total = salario / 1293.20

console.log(`Este trabalhador recebe ${total.toFixed(2)} salários mínimos`);

}


const prompt = require('prompt-sync')();

const val1 = parseFloat(prompt("Digite seu val1: "));
const val2 = parseFloat(prompt("Digite seu val2: "));

// valorSalario()
somar(val1,val2)