function init() {
    left = document.querySelector('.card-container.active .image-card .buttoms-container .left')
    rigth = document.querySelector('.card-container.active .image-card .buttoms-container .rigth')
    left.addEventListener('click', prevCard)
    rigth.addEventListener('click', nextCard)
}
let isLeft = true
let isRigth = false

function nextCard() {
    card = document.querySelector('.card-container.active')
    cardHidden = document.querySelector('.card-container.hidden')
    if (isLeft) {
        cardHidden.classList.remove('hidden')
        cardHidden.classList.add('active')
        card.classList.add('hidden')
        card.classList.remove('active')
        isLeft = false
        isRigth = true
        init()
    }
}
function prevCard() {
    card = document.querySelector('.card-container.active')
    cardHidden = document.querySelector('.card-container.hidden')
    if (isRigth) {
        cardHidden.classList.remove('hidden')
        cardHidden.classList.add('active')
        card.classList.add('hidden')
        card.classList.remove('active')
        isLeft = true
        isRigth = false
        init()
    }
}
init()
