// importando
import { celcius_para_fahrenheit, kil_para_milhas } from './023_ModuloConversoes.js';

let resultado = celcius_para_fahrenheit(25)

console.log(resultado);             // { Fahrenheit: 77 }
console.log(resultado.Fahrenheit);  // 77

resultado = kil_para_milhas(1000)

console.log(resultado);             // { milha: 621.3727366498067 }
console.log(resultado.milha);       // 621.3727366498067

