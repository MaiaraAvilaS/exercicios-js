//Elabore um programa que dada a idade de um nadador classifica-o em uma das seguintes categorias

//Idade	Categoria
//5-7 anos	Infantil A
//8-10 anos	Infantil B
//11-13 anos	Juvenil A
//14-17 anos	Juvenil B
//+18	Adulto

var idade =18

if(idade >= 5 && idade <= 7 ){
    console.log("Infantil A");
}else if(idade >= 8 && idade <=10){
    console.log("Infantil B");
}else if(idade >= 11 && idade <=13){
    console.log("Juvenil A");
}else if(idade >= 14 && idade <=17){
    console.log("Juvenil B");
}else if(idade >= 18){
    console.log("Adulto")
}else{
    console.log("Idade não categorizada")
}