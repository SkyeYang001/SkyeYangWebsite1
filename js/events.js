const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')
const element5 = document.getElementById('element5')

// inner HTML (HTML)
// style (CSS)

element1.addEventListener('click', () => {
    element1.innerHTML = "I've been clicked! <br> Try double clicking me"
})

element1.addEventListener('dblclick', () => {
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me <br> or press h to make me disappear and reappear"
})

let active = false

document.addEventListener('keyup', (event) => {
    if (event.key == 'h') {
        if (active == false) {
            element1.classList.add('active')
            active = true
        } else {
            element1.classList.remove('active')
            active = false
        }
    }
})

element2.addEventListener('mouseover', () => {
    element2.style.color = "green"
    // no (-) in background-color
    element2.style.backgroundColor = "blue"
})

element2.addEventListener('mouseout', () => {
    element2.style.color = "white"
    element2.style.backgroundColor = "#BB33BB"
})

let positionY = 0;
let positionX = 0;


// Anything in the page event listener
document.addEventListener('keyup', (event) => {
    console.log(event.key)
    // showing pressed keys on the console
    if (event.key == 'ArrowDown') {
        positionY = positionY + 10;
    } else if (event.key == 'ArrowUp') {
        positionY = positionY - 10;
    } else if (event.key == 'ArrowLeft') {
        positionX = positionX + 10;
    } else if (event.key == 'ArrowRight') {
        positionX = positionX - 10;
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`
})

element4.addEventListener('click', () => {
    element4.style.width = "10px"
    element4.style.height = "10px"
    element4.innerHTML = ""
    element4.style.opacity = .3
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'j') {
        element4.style.width = "300px"
        element4.style.height = "80px"
        element4.innerHTML = "<h4>Click me to make me SMALL! <br> Press 'j' to bring me back.</h4>"
        element4.style.opacity = 1
    }
})

const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', () => {
    element5.style.animationPlayState = list[index]
    // modulo
    index = (index + 1) % 2
})

// element.addEventListener('', () => {

// })
