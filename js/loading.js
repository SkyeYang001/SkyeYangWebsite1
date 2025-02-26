const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// variable
let load = 0

// calling the function many times
// the time is in millseconds
let int = setInterval(blurring, 30)


function blurring() {
    load = load + 1
    // if statment ending the interval
    if (load > 99) {
        clearInterval(int)
    }
    // backticks (`) turning int to string
    loadText.innerText = `${load}%`
    // going to the css sheet
    // backticks (`)
    bg.style.filter = `blur(${50 - (load / 2)}px)`
    loadText.style.opacity = `${1 - load / 100}`
}
