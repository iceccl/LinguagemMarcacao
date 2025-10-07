// função anonima

const area = function (base, altura) {
    let calculo = (base * altura) / 2;
    return calculo;
}

console.log(`A area do triângulo cuja base mede 15, e altura 15, equivale à ${area(15, 15)}`)

// arrow function

const area2 = (base, altura) => {
    let calculo = (base * altura) / 2;
    return calculo;
}

console.log(`A area do triângulo cuja base mede 15, e altura 15, equivale à ${area2(15, 15)}`)