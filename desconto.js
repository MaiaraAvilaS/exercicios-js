//Crie um algoritmo que 
//1) solicite um valor numérico ao usuário; 
//2) acrescente 15% de desconto no valor aplicado e;
//3) retorne o valor final em reais para o usuário.

let valor = 100.00


let desconto = valor * 0.15;
let valorFinal = valor - desconto;

  
 console.log("Valor final após 15% de desconto: R$ " + valorFinal.toFixed(2));

