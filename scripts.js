const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of  cards) {
    card.addEventListener("click", function(){
        const postId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.classList.add('maximized')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximized')
    modalOverlay.querySelector('iframe').src = ""
})

//MANIPULAR O BOTÃO DE MAXIMIZAR
document.querySelector('.maximize-modal').addEventListener("click", function(){
    
    if (modal.classList.contains('maximized')) {
        modal.classList.remove('maximized')
    }else {
        modal.classList.add('maximized')
    }
})
