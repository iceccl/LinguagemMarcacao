// // importa o módulo "express", que é um framework
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

app.get('/sobre', (req, res) => {
    res.send('Esta é a página sobre o projeto.')
})

const usuarios = ['Mauro', 'Alice', 'Juliana', 'Roger'];

app.get('/usuarios', (req, res) =>{
    let html = '<ul>';
    for (let u of usuarios) html += `<li>${u}<li>`;
    html += '<ul>';
    res.send(html)
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const u = usuarios[id];
    if (u != undefined) res.send(`Usuário ${id}: ${u}`);
    else res.send(`Usuário não encontrado na posição: ${id}`)
})

app.get('/soma/:id/:id2', (req, res) => {
    const num1 = req.params.id, num2 = req.params.id2;
    const soma = parseInt(num1) + parseInt(num2);
    res.send(`<h1>${num1} + ${num2} = ${soma}</h1>`);
})

app.get('/menu', (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/">Principal</a><br>
        <a href="/sobre">Sobre</a><br>
        <a href="/usuarios">Usuários</a><br>
        <a href="/usuario/1">Usuário 1</a><br>
        <a href="/usuario/10">Usuário inválido</a><br>
        <a href="/soma/10/20">Soma</a><br>
    `)
})

const porta = 3000; // Porta onde o servidor vai rodar

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    console.log(`Servidor rodando em http://localhost:${porta}/menu`);
})
