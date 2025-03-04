panels = document.querySelector('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
        removeActiveClasses()
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panels.classList.remove('active')
    })
}
