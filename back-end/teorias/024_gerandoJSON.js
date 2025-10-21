// Importa o módulo 'fs' para ler arquivos
const fs = require('fs');

// criamos um objeto JavaScript comum
const pessoa = {
    nome: "Douglas",
    idade: 30,
    profissao: "Desenvolvedor",
    hobbies: ["programar", "correr", "viajar"]
};

// convertemos o objeto em JSON (formato texto)
const jsonString = JSON.stringify(pessoa, null, 2)

// Salvamos em um arquivo 
fs.writeFileSync('025.json', jsonString);
console.log("Arquivo JSON criado com sucesso!");
