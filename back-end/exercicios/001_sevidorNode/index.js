import express from 'express';

const app = express();

// Rota GEt na raiz
app.get('/', (req, res) => {
    // Envia uma string como resposta do servidor
    res.send('Bem vindo ao Servidor Node.js')
})

const produtos = ['Notebook', 'Mouse', 'Teclado', 'Monitor'];

app.get('/produtos', (req, res) =>{
    let html = '<ul>';
    for (let p of produtos) html += `<li>${p}<li>`;
    html += '<ul>';
    res.send(html)
})

app.get('/produtos/:id', (req, res) => {
    let id = req.params.id;
    let p = produtos[id];
    if (p != undefined) res.send(`Produto: ${id}: ${p}`);
    else res.send(`Produto não encontrado na posição: ${id}`)
})

app.get('/total/:id/:preco/:qtde', (req, res) => {
    let id = req.params.id; let preco = req.params.preco; let qtde = req.params.qtde;
    let soma = parseFloat(preco) * parseFloat(qtde)
    res.send(`<h1>${id}: preco[${preco}] * quantidade[${qtde}] = ${soma}</h1>`);
})

app.get('/menu', (req, res) => {
    res.send(`
        <h1>Menu</h1>
        <a href="/produtos">Produtos</a><br>
        <a href="/produtos/1">Produto por id</a><br>
        <a href="/total/1/1000/1">calculo</a><br>
    `)
})

const porta = 3000; // Porta onde o servidor vai rodar

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
    console.log(`Servidor rodando em http://localhost:${porta}/menu`);
})
