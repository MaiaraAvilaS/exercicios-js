//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

/*const prompt = require('prompt-sync')();

const valA = parseFloat(prompt("Digite o primeiro número: "));
const valB = parseFloat(prompt("Digite o segundo número: "));
const valC = parseFloat(prompt("Digite o terceiro número: "));

const soma = valA + valB;

if (soma < valC){
    console.log(`A soma do primeiro e do segundo número é ${soma} e esse resultado é menor que o terceiro número que é ${valC}`)
} else if(soma == valC){
    console.log(`A soma do primeiro e do segundo número é ${soma} e esse resultado é igual ao terceiro número que é ${valC}`)
}else{
     console.log(`A soma do primeiro e do segundo número é ${soma} e esse resultado é maior que o terceiro número que é ${valC}`)
}*/



const leituraValores = {
    a: 0,
    b: 0,
    c: 0,

    lerValores: function(){
            const prompt = require('prompt-sync')();
            this.a = parseFloat(prompt("Digite o primeiro número: "));
            this.b = parseFloat(prompt("Digite o segundo número: "));
            this.c = parseFloat(prompt("Digite o terceiro número: "));

    },

   somaValores: function(){
    return this.a + this.b
   },

   menorQueC: function(){
    const soma = this.somaValores();
    console.log(`A soma entre A e B é: ${soma}`);
    if (soma < this.c){
        console.log("A soma é menor que C.");
    }else if(soma == this.c) {
        console.log("A soma é igual que C.");
    } else {
      console.log("A soma é maior que C."); 
    }

   }
}
leituraValores.lerValores();
leituraValores.menorQueC();