// equivale ao valor de PI
const pi = Math.PI;

function calcularRaio(circunferencia) {
    let calculo = (circunferencia / (2 * pi))
    return calculo.toFixed(2);
}

console.log(`O raio do circulo cuja circunferência equivale à 10 é ${calcularRaio(10)} aproximadamente`);
console.log(`O raio do circulo cuja circunferência equivale à 20 é ${calcularRaio(20)} aproximadamente`);
console.log(`O raio do circulo cuja circunferência equivale à 50 é ${calcularRaio(50)} aproximadamente`);
