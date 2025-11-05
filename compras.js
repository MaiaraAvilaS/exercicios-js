//Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a quantidade, 
// calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade e o valor total a pagar.
//Código	Produto	Preço Unitário (R$)
//200	Camiseta	R$ 25,00
//201	Calça	R$ 35,00
//202	Jaqueta	R$ 45,00
//203	Saia	R$ 55,00

const prompt = require('prompt-sync')();


let codItem = parseInt(prompt("Digite o código do item: "));
let qtd = parseInt(prompt("Digite a quantidade de itens: "));

if(codItem == 200){
    let totalCamiseta = qtd * 25;
    console.log(`O produto escolhido foi a Camiseta, o valor unitário é R$ 25, a quantidade de itens foram ${qtd} e o valor total ficou R$ ${totalCamiseta.toFixed(2)}`);
}else if (codItem == 201){
    let totalCalca = qtd * 35;
    console.log(`O produto escolhido foi a Calça, o valor unitário é R$ 35, a quantidade de itens foram ${qtd} e o valor total ficou R$ ${totalCalca.toFixed(2)}`);
}else if(codItem == 202){
    let totalJaqueta = qtd * 45;
    console.log(`O produto escolhido foi a Jaqueta, o valor unitário é R$ 45, a quantidade de itens foram ${qtd} e o valor total ficou R$ ${totalJaqueta.toFixed(2)}`);
}else if(codItem == 203){
    let totalSaia = qtd * 55;
    console.log(`O produto escolhido foi a Saia, o valor unitário é R$ 55, a quantidade de itens foram ${qtd} e o valor total ficou R$ ${totalSaia.toFixed(2)}`);
}
