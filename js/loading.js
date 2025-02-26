const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// variable
let load = 0

function blurring() {
    load = load + 1
    // backticks (`) turning int to string
    loadText.innerText = `${load}%`


}
