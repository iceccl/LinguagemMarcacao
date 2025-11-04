const gatilhoDropdownWeb = document.querySelector("#minha-conta");
const menuDropdownWeb = document.querySelector("#menu-minha-conta");

// // Mobile
const gatilhoDropdownMobile = document.querySelector("#btn-hamburguer");
const menuDropdownMobile = document.querySelector("#menu-mobile");

// Dropdown Web
gatilhoDropdownWeb.addEventListener("click", (evento) => {
    evento.stopPropagation(); // impede que o elemento vaze
    menuDropdownWeb.classList.toggle("hidden");
    menuDropdownMobile.classList.add("hidden"); // garantir que o menu feche
})

// menu mobile
gatilhoDropdownMobile.addEventListener("click", (evento) =>{
    evento.stopPropagation(); // impede que o elemento vaze
    menuDropdownMobile.classList.toggle("hidden");
    menuDropdownWeb.classList.add("hidden"); // garantir que o menu feche
})

// Movimentando o carroussel

// Selecionar os elementos
const containerSlides = document.querySelector("#carrossel-slides");
const todosSlides = document.querySelectorAll(".slide-carrossel")
const btnAnterior = document.querySelector("#btn-anterior");
const btnProximo = document.querySelector("#btn-proximo");

let slideAtual = 0;
const totalSlides = todosSlides.length;

// Função principal
function atualizarCarroussel() {
    let valorTransform = `translateX(-${slideAtual * 100}%)`;
    containerSlides.style.transform = valorTransform;
}

btnAnterior.addEventListener("click", () => {
    slideAtual--;
    if (slideAtual < 0) {
        slideAtual = totalSlides - 1;
    }
    atualizarCarroussel();
})

btnProximo.addEventListener("click", () => {
    slideAtual++;
    if (slideAtual >= totalSlides) {
        slideAtual = 0
    }
    atualizarCarroussel();
})

// inicializando carroussel
atualizarCarroussel();