// Importa o módulo 'fs' para ler arquivos
const fs = require('fs');

// lê o conteúdo do arquivo JSON
const dados = fs.readFileSync('./022_json.json', 'utf8');

// Converte o conteúdo JSON (texto) em objeto JavaScript
const pessoa = JSON.parse(dados);
console.log(pessoa);

// Acessa e exibe os dados
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);

