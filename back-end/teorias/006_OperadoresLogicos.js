// && (e, and)

console.log((5 > 3) && (10 < 20));  // true
console.log((5 > 3) && (10 > 20));  // false

const usuario = 'Lyuz'
const senha = 123
console.log((usuario == 'Lyuz') && (senha == 123));  // true
console.log((usuario == 'Lyuz') && (senha == 1234));  // false

// || (Ou, Or)
console.log((usuario == 'Lyuz') || (senha == 123));  // true
console.log((usuario == 'Lyuz') || (senha == 1234));  // true
console.log((usuario == 'Lyuzinho') || (senha == 1234));  // false

// NOVIDADE (! = contrario de)
console.log(!(5 > 10))  // true

let aprovado = false
aprovado = !aprovado    
console.log(aprovado);  // true
