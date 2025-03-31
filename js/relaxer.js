const container = document.getElementbyId('relaxer-container')
const text = document.getElementbyId('text')

breathAnimation()
breathAnimation()

function breathAnimation() {
    text.innerHTML = 'Breath In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout( () => {
        text.innerHTML = 'Hold'
    }, 3000)

    setTimeout( () => {
        text.innerHTML = 'Breath Out'
        container.classList.remove('grow')
        container.classList.add('shrink')
    }, 4500)
}
