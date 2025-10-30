//Faça um algoritmo que dado um número, retorne a classificação do ângulo.

//Tipo de ângulo	Significado
//Ângulo agudo	ângulo com medida maior que 0º e menor que 90º
//Ângulo reto	ângulo com medida igual a 90º
//Ângulo obtuso	ângulo com medida maior que 90º
//Ângulo rado	ângulo com a medida igual a 0º ou 180º
//Ângulo côncavo	ângulo com medida entre 180º e 360º
//Ângulo completo	ângulo com medida igual a 360º

var angulo = 181

if(angulo > 0 && angulo < 90){
    console.log("Ângulo agudo")
}else if (angulo === 90) {
    console.log("Ângulo reto")
}else if(angulo > 90 && angulo < 180){
    console.log("Ângulo obtuso")
}else if(angulo === 0 || angulo === 180){
    console.log("Ângulo rado")
}else if(angulo > 180 && angulo < 360){
    console.log("Ângulo côncavo")
}else if(angulo == 360){
    console.log("Ângulo completo")
}

