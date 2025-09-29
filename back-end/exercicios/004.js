const prompt = require('prompt-sync')();

let escolha = prompt('Selecione um modo de jogo (1-5): ')

switch (escolha) {
    case '1':
        console.log('Modo: fácil');
        break;
    case '2':
        console.log('Modo: Médio');
        break;
    case '3':
        console.log('Modo: Difícil');
        break;
    case '4':
        console.log('Modo: Muito Difícil');
        break;
    case '5':
        console.log('Modo: Insano');
        break;

    default:
        console.log('Modo de jogo não existe');
        break;
}
