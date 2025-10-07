// exemplo sem função
let cliente = "Roberto";
console.log(`Seja bem vindo ${cliente}`);
cliente = "Patricia"
console.log(`Seja bem vindo ${cliente}`);
cliente = "Joana";
console.log(`Seja bem vindo ${cliente}`);

// --------------------------------------------------

// mesmo objetivo, mas agora com função:
function saudacaoCliente(cliente) {
    console.log(`Seja bem-vindo(a) ${cliente}`);
}

saudacaoCliente('Roberto')
saudacaoCliente('Patrícia')
saudacaoCliente('Joana')