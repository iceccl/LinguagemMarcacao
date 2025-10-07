// importa o módulo "express", que é um framework
// criar servidores web no Node.js
import express from 'express';

// Cria uma aplicação/instância do Express
// a variável "app" agora representa o servidor

const app = express();

// Rota GEt na raiz
app.get('/', (req, res) => {
    // Envia uma string como resposta do servidor
    res.send('Bem vindo ao Servidor Node.js')
})

const porta = 3000; // Porta onde o servidor vai rodar

// Inicia o servidor Express na porta definida
app.listen(porta, () => {
    console.log(`Servidor iniciado na porta http://localhost:${porta}`);
})