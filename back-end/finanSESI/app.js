// importa bibliotecas
import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';

// Configura o Servidor BackEnd
const app = express();

// Configura o EJS como motor de views
app.set('view engine', 'ejs');

// Ativa pasta de arquivos estáticos(CSS, imagens, JS do front)
app.use(express.static('public'));

// Define o layout padrão
app.use(expressLayouts)
app.set('layout', 'layouts/principal')

// para processar os dados do formulário
app.use(express.urlencoded({ extended: true }))

// Rotas GET (páginas)
app.get('/', (req, res) => {
    // renderiza views/indes.ejs dentro do layout principal
    res.render('index');
})

app.get('/sobre', (req, res) => {
    // renderiza views/sobre.ejs dentro do layout principal
    res.render('sobre');
})

app.get('/juros_simples', (req,res) => {
    res.render('juros_simples')
})

app.get('/juros_compostos', (req,res) => {
    res.render('juros_compostos')
})

// rota para processar o cálculo
app.post('/juros_simples', (req, res) => {
    const capital = req.body.capital
    const taxa = req.body.taxa
    const tempo = req.body.tempo
    const juros = parseFloat(capital) * (parseFloat(taxa) / 100) * parseFloat(tempo);
    const total = parseFloat(capital) + juros;

    res.render('juros_simples', {capital, taxa, tempo, juros, total})
})
app.post('/juros_compostos', (req, res) => {
    const capital = req.body.capital
    const taxa = req.body.taxa
    const tempo = req.body.tempo
    const juros = parseFloat(capital) * ((1 + (parseFloat(taxa) / 100))**parseFloat(tempo));
    const total = parseFloat(capital) + juros;

    res.render('juros_compostos', {capital, taxa, tempo, juros, total})
})

// Sobe o servidor
const porta = 3000;


app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`); 
});

