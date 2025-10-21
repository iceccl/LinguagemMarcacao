const juros = require('./025_modulo_juros');

//                    juros simples
let resultado = juros.juros_simples(1000, 4, 12)
console.log(resultado);         // {juros: 400, total: 1480}
console.log(resultado.juros);   // 480
console.log(resultado.total);   // 1480

resultado = juros.juros_compostos(1000, 4, 12)
console.log(resultado);         //{juros: 601.03, total: 1601.03}
console.log(resultado.juros);   // 601.03
console.log(resultado.total);   // 1601.03

