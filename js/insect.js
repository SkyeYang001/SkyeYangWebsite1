const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insects_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const time = document.getElementById('time')
const score = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let scores = 0
let selected_insect = {}

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insects_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        // startGame()
    })
})

function startGame() {
    // setInterval function gets called in every set time
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let s = seconds % 60
    let m = seconds / 60
    timeEl.innerHTML = `Time: ${seconds}`
    seconds = seconds + 1;
}
