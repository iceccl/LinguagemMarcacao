// função anônima -------------

const saudacao2 = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`);
};

saudacao2("Mary Jane");

// Arrow function =>

const saudacao3 = (nome) => {
    console.log(`Tenha um bom dia ${nome}`);
};

saudacao3("Mary Jane");

// Arrow function com 2 parâmetros
const soma2 = (v1, v2) => {
    console.log(v1, + v2);
}

soma2(2, 9)

// Arrow function sem parâmetros

const bemvindo = () => {
    console.log("Bem-vindo ao curso de JavaScript");
}

bemvindo();

// Arrow function com uma linha de código (forma reduzida)

const multiplicacao = (v1, v3) => v1 * v3;
console.log(multiplicacao(2,5));

