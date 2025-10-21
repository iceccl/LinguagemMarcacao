// Importa o pacote 'PG' (postgreSQL) para conectar o nodemon
import pkg from 'pg';

// extrai o objeto 'Pool' do pacote, usado para gerenciar
const { Pool } = pkg;

// Cria uma nova conexão com o banco de dados óstgreSQL
const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '_2025_escola',
    password: 'admin',
    port: 5432
})

// Exporta a conexão para ser usada em outros arquivos
export default BD;