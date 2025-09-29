const prompt = require('prompt-sync')();
let contador = 0;
let soma = 0;

do{
    var nota = Number(prompt('Insira uma nota: '))
    soma += nota;
    contador++;

} while (contador <= 10 && nota != -1) {

    console.log('Fim');
    console.log(`Média: ${(soma/contador).toFixed(2)}`);
    
}