const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome?: ')
console.log(`Seja bem-vindo(a) ${nome}`);

let anoNasc = Number(prompt('Em qual ano você nasceu?: '))
let idade = 2025 - anoNasc;
console.log(`${nome} você tem ${idade} anos`);
