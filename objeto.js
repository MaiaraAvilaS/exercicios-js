// Função para calcular o valor a pagar com base no código do produto e quantidade
function calcularValor(codigo, quantidade) {
  // Mapeamento dos produtos e seus preços
  const produtos = {
    200: { nome: "Camiseta", preco: 25 },
    201: { nome: "Calça", preco: 35 },
    202: { nome: "Jaqueta", preco: 45 },
    203: { nome: "Saia", preco: 55 }
  };

  // Verifica se o código é válido
  if (!produtos[codigo]) {
    console.log("Código de produto inválido.");
    return;
  }

  const produto = produtos[codigo];
  const valorTotal = produto.preco * quantidade;

  // Mensagem de retorno
  console.log(`Produto: ${produto.nome}`);
  console.log(`Quantidade: ${quantidade}`);
  console.log(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);
}

// Exemplo de uso
const prompt = require('prompt-sync')();
const codigoItem = parseInt(prompt("Digite o código do produto:"));
const quantidade = parseInt(prompt("Digite a quantidade:"));

calcularValor(codigoItem, quantidade);