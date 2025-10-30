//Baseando na tabela abaixo, retorne a classificação de um produto.

//Código	Classificação
//1	Alimento não perecível
//2 - 4	Alimento perecível
//5 - 6	Vestuário
//7	Higiene Pessoal
//8 - 15	Limpeza e utensílios domésticos
//Qualquer outro código	Código inválido

var cod =10

if (cod === 1){
    console.log("Alimento não perecível")
}else if(cod >= 2 && cod <= 4){
    console.log("Alimento perecível")
}else if(cod === 5 || cod ===6){
    console.log("Vestuário")
}else if(cod === 7){
    console.log("Higiene Pessoal")
}else if(cod >= 8 && cod <= 15){
    console.log("Limpeza e utensílios domésticos")
}