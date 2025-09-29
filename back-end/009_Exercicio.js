const prompt = require('prompt-sync')();

let usuarioLogin = prompt('Digite o seu usuário')
let senhaLogin = prompt('Digite sua senha: ')
console.log('USUÁRIO LOGADO NO SISTEMA');

let tentativas = 3

for (i = 1; i < tentativas; i++) {
    let usuario = prompt('Para entrar digite o seu usuário')
    let senha = prompt('Para entrar digite a sua senha')

    if (usuario == usuarioLogin && senha == senhaLogin) {
        console.log('Você entrou com sucesso!');
        tentativas = 0;
    } else {
        console.log('Usuário e/ou senha incorretos, tentativas restantes: ', tentativas);
        tentativas--
        console.log('----------------------------------------------');
    }
}
