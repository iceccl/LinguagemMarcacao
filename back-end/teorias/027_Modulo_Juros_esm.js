// Arrow function para calcular Juros Simples
export const juros_simples = (capital, taxa, tempo) => {
    const juros = Capital * (taxa / 100) * tempo
    const objRetorno = {
        juros: juros,
        total: capital + juros
    }
    return objRetorno;
}


// Arrow function para calcular juros compostos
const juros_compostos = (capital, taxa, tempo) => {
    const final = capital * ((1 + taxa/100) ** tempo)
    const objRetorno = {
        juros: final - capital,
        total: final
    }
    return objRetorno;
}
