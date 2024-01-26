let imagem = document.querySelector('.starbucks')
let corCirculo = document.querySelector('.circulo') 

function mudarImagem(evento) {
    imagem.src = evento
}

function mudarCor(evento) {
    corCirculo.style.background = evento
}
