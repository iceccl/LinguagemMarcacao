const prompt = require('prompt-sync')();

let input = prompt('Digite a sua idade: ')
if (input <= 12 || input >=60) {
    console.log('Você tem direito ao desconto de 50%!');
} else {
    console.log('Você paga a inteira');
}