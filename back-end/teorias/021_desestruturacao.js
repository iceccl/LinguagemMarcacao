let funcionario = {
    nome: "Reinaldo",
    salario: 5000.00,
    idade: 40,
    setor: "RH"
}

// Atribuindo dado a uma variável da forma comum
const nomeFunc = funcionario.nome
const salarioFunc = funcionario.salario
console.log(nomeFunc);
console.log(salarioFunc);

// Utilizando a desestruturação de objetos
const { idade, setor} = funcionario

console.log(nomeFunc);
console.log(salarioFunc);
console.log(idade);
console.log(setor);

