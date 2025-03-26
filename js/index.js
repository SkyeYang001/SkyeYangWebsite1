const hero = document.getElementsByClassName('hero')
const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')

let active = false

element1.addEventListener('click', () => {
    if (active == false) {
        hero.classList.add('active')
        active = true
    } else {
        hero.classList.remove('active')
        active = false
    }
})
