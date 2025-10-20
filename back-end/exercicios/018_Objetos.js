// Criando nosso primeiro objeto
let produto = {
    nome: "Iphone",
    modelo: "14",
    valor: 3999.99,
    memoria: 256,
};

// exibindo o objeto completo
console.log(produto);

// Notação de ponto
console.log(produto.nome);
console.log(produto.modelo);

// Notação de colchetes
console.log(produto["valor"]);   //3999.99
console.log(produto['memoria']); // 256

// Alterando propriedade:
produto.valor = 3850.00
console.log(produto.valor);
console.log(produto);

// e caso ela não exista, essa propriedade é acrescentada no objeto:
produto.fabricante = "Apple"
console.log(produto.fabricante);
console.log(produto);

// Iterando sobre os objetos
for (let chave in produto) {
    console.log(`${chave} seu valor é: ${produto[chave]}`);
    
}

let funcionario = {
    nome: "Reinaldo",
    idade: 30,
    salario: 5000.00,
    filhos: {
        filho1: "João",
        filho2: "Maria"
    }
}

console.log(funcionario);

let aluno = {
    nome: "Marta",
    idade: 10,
    turma: {
        nome_turma:"5º EF",
        ano: "2024"
    },
    mae: {
        nome: "Ana",
        idade: 40,
    },
    notas: [
        {disciplina: "Matemática", nota: 8.5},
        {disciplina: "Português", nota: 9.0}
    ]
}

console.log(aluno);
console.log(aluno.nome);                    //Marta
console.log(aluno.idade);                   //10
console.log(aluno.turma);                   //{ nome_turma: '5º EF' ano:..}
console.log(aluno.turma.nome_turma);        //5º EF
console.log(aluno.mae);                     //{ nome: 'Ana', idade: 40}
console.log(aluno.notas);                   //[ {disciplina: "Matemática", Notas:}]
console.log(aluno.notas[0]);                
console.log(aluno.notas[0].disciplina);
