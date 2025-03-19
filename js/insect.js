const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insects_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const time = document.getElementById('time')
const score = document.getElementById('score')
const message = document.getElementById('message')

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insects_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
        
    })
})
