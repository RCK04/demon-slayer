const botao = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const fecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('iframeVideo')
const linkVideo = video.src;

botao.addEventListener('click', clicou)

function clicou(){
    modal.classList.add('aberto')
    video.setAttribute('src', linkVideo)
}

fecharModal.addEventListener('click', closeModal)

function closeModal(){
    modal.classList.remove('aberto')
    video.setAttribute('src', '')
}



