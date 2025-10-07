// IMportantíssimo pro restante do curso
// Função normal -------------

function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}`);
}

saudacao('Mary Jane')

// Função anônima ------------

const saudacao2 = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`);
}

saudacao2("Mary Jane")

// Função nomeada

function soma(v1, v2) {
    console.log(v1 + v2);
}

soma(2, 5)

// Função anÔnima atribuída a uma costante
const soma2 = function (v1, v2) {
    console.log(v1 + v2);
}

soma2(2, 6);
