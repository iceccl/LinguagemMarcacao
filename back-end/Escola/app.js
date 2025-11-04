import express from 'express';
import path from 'path';
//[pause]
import { fileURLToPath } from 'url';
//[pause]

import adminRotas from './routes/admin.js';
import professoresRotas from './routes/professores.js';
//[pause]

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//[pause]

const app = express();
//[pause]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//[pause]

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//[pause]

// Rota da página inicial (Landing Page)
app.get('/', (req, res) => res.render('landing/index'));
//[pause]

app.use('/admin', adminRotas);         // Área administrativa
app.use('/professores', professoresRotas); // CRUD de professores
//[pause]

// Inicia o servidor na porta 3000
app.listen(3000, () => 
  console.log('Servidor rodando em http://localhost:3000')
);
