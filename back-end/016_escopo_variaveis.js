// escopo e função
let variavelGlobal = "Sou Global";
function minhaFuncao() {
    let variavelLocal = "Sou local";
    console.log(variavelGlobal); // Acessa a variável global
    console.log(variavelLocal);  // Acessa a variável local
}

minhaFuncao();

console.log(variavelGlobal);  // Acessa a variável global
// console.log(variavelLocal);// erro: variavelLocal não está declarada