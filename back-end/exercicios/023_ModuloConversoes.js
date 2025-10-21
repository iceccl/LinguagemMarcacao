// Arrow function para calculo de celcius para fahrenheit
export const celcius_para_fahrenheit = (celcius) => {
    const F = celcius * 1.8 + 32;
    const retorno = {
        Fahrenheit: F
    }
    return retorno;
}

// Arrow function para calcular Quilômetros em milhas
// 1milha = 1,60934
export const kil_para_milhas = (km) => {
    const milha = km / 1.60934
    const retorno = {
        milha: milha
    }
    return retorno;
}