//Faça um algoritmo que receba uma letra e determine se ela é vogal ou consoante. Desenvolva duas respostas (uma com "if" e a outra com "switch").

/*var letra = 'i'

if(letra == 'a'|| letra =='e'|| letra == "i" || letra == "o" || letra == "u"){
    console.log("A letra é uma vogal");
}else{
    console.log("A letra é uma consoante");

}*/

const prompt = require('prompt-sync')();


var letra = prompt("Digite uma letra:");

switch (letra){
    case  'a' || 'e' || 'i' || 'o' || 'u':
        console.log("A letra é uma vogal");
        break;
    default:
        console.log("A letra é uma consoante");     
}


