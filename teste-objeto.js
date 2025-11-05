
  const produtos = {
    200: { nome: "Camiseta", preco: 25 },
    201: { nome: "Calça", preco: 35 },
    202: { nome: "Jaqueta", preco: 45 },
    203: { nome: "Saia", preco: 55 }
  };

/*const prompt = require('prompt-sync')();
const codigo = parseInt(prompt("Digite o código do produto:"));
const quantidade = parseInt(prompt("Digite a quantidade:"));

if (!produtos[codigo]) {
    console.log("Código de produto inválido.");
    return;
  }

  const produto = produtos[codigo];
  const valorTotal = produto.preco * quantidade;

  console.log(`Produto: ${produto.nome}`);
  console.log(`Quantidade: ${quantidade}`);
  console.log(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);*/

  console.log(produtos[200].preco)