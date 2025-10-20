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
