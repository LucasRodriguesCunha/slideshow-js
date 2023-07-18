'usar estrito';

const imagens = [
    {"id": "1", "url":"/imagens/chrono.jpg"},
    {"id": "2", "url":"/imagens/inuyasha.jpg"},
    {"id": "3", "url":"/imagens/tenchi.jpg"},
    {"id": "4", "url":"/imagens/tenjhotenge.jpg"},
    {"id": "5", "url":"/imagens/yuyuhakusho.jpg"},
    {"id": "6", "url":"/imagens/ippo.png"},
]

const container = document.querySelector(".container-itens");

const carregarImagens = (imagens, container) => {
    imagens.forEach(imagem => {
        container.innerHTML += 
        `<div class = "item">
            <img src = "${imagem.url}",
        </div>`
    });
}

// carregarImagens(imagens, container);