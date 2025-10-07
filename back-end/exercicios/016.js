// função anônima
const calcularRaio = function (circunferencia) {
    let pi = Math.PI;
    let calculo = (circunferencia / (2 * pi))
    return calculo.toFixed(2);
}

console.log(`O raio do circulo cuja circunferência equivale à 10 é ${calcularRaio(10)} aproximadamente`);

// arrow funtion

const calcularRaio2 = (circunferencia) => {
    let pi = Math.PI;
    let calculo = (circunferencia / (2 * pi))
    return calculo;
}


console.log(`O raio do circulo cuja circunferência equivale à 10 é ${calcularRaio2(10)} aproximadamente`);