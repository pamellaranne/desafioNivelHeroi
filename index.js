let nomeHeroi = "Pamella";
let quantidadeExperiencia = 15000;

if (quantidadeExperiencia <= 1000) {
    console.log("Classificação da Experiência: Ferro");
}
else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000) {
    console.log("Classificação da Experiência: Bronze");
}
else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000) {
    console.log("Classificação da Experiência: Prata");
}
else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000) {
    console.log("Classificação da Experiência: Ouro");
}
else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000) {
    console.log("Classificação da Experiência: Platina")
}
else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000) {
    console.log("Classificação da Experiência: Ascendente");
}
else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000) {
    console.log("Classificação da Experiência: Imortal");
}
else{
    console.log("Classificação da Experiência: Radiante");
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + quantidadeExperiencia + ".");