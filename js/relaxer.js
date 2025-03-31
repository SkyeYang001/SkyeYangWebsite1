const container = document.getElementbyId('relaxer-container')
const text = document.getElementbyId('text')

function breathAnimation() {
    text.innerHTML = 'Breath In'
    container.classList.add('grow')
}
