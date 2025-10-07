function calcularComissao(valor, percComissao) {
    let valorComissao = valor * (percComissao / 100)
    return valorComissao;
    let teste = 'teste'; // (essa linha nunca será executada após o return)
}

let comissaoRetornada
comissaoRetornada = calcularComissao(2500, 5)

let salario = 3000;
salario = salario + comissaoRetornada;
console.log(`O salário final e de R$${salario}`);
