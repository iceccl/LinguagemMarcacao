import { juros_simples, juros_compostos } from './027_Modulo_Juros_esm';

// [pause]
let resultado = juros_simples(1000, 4, 12)
// [pause]
console.log(resultado);         // {Juros: 480, total: 1480}
console.log(resultado.juros);   // 480
console.log(resultado.total);   // 1480

resultado = juros_compostos(1000, 4, 12);

console.log(resultado);         // {Juros: 601.03, total: 1601.03}
console.log(resultado.juros);   // 601.03
console.log(resultado.total);   // 1601.03
