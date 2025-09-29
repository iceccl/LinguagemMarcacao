const prompt = require('prompt-sync')();

let numero1 = prompt('Insira um número: ');
let numero2 = prompt('Insira outro número: ');

while (numero1>0 && numero2>0) {
    let soma = numero1 + numero2;
    console.log(`${numero1} + ${numero2} = ${soma}`);
    break;
}