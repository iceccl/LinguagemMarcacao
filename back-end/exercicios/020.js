let serie = {
    titulo: "Stranger Things",
    diretores: "Matt Duffer e Ross Duffer",
    genero: "Suspense",
    anoDeLancamento: 2016,
    nrTemporadas: 4,
    episodios: [
        {temporada: 1, nrEpisodio: 1, titulo: "O desaparecimento de Will Byers", duracaoEmMinutos: 47}, //ep 1 = 0
        {temporada: 1, nrEpisodio: 2, titulo: "O esquisito da rua Maple", duracaoEmMinutos: 55}, //ep 2 = 1
        {temporada: 1, nrEpisodio: 3, titulo: "Holly, Jolly", duracaoEmMinutos: 52} //ep 3 = 2
    ]
}

console.log(serie.episodios[2]);
