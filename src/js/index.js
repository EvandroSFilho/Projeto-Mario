/*
OBJETIVO 1 - quando o usoario clicar no botão de veja o trailer, devemos abrir a modal com video do trailer

OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com video do trailer
       - passo 1 - dar um jeito de pegar elemento que representa o botão na tela usando o JS
       - passo 2 - dar um jeito de indentificar quando o usuário clicar no botão
       - passo 3 - dar um jeito de pegar  o elemento da modal do JS
       - passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devomos fechar o modal
       - passo 1 - dar um jeito de pegar o elemento de fechar modal  usando o JS
       - passo 2 - dar um jeito de identificar quando o usuário clicar no X
       - passo 3 - fechar a modal

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src; 

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});