const hero = document.getElementById('hero')
const hello = document.getElementById('hello')

const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const pages = ['nav.html', 'search.html', 'loading.html', 'expanding.html', 'events.html', 'interactivewebpage.html', 'sound.html', 'insect.html', 'relaxer.html', 'art.html', 'ball.html', 'speach.html']


let pictureactive = false

element1.addEventListener('click', () => {
    if (pictureactive == false) {
        hero.classList.add('active')
        hello.classList.add('active')
        // box.classList.add('active')
        pictureactive = true
    } else {
        hero.classList.remove('active')
        hello.classList.remove('active')
        // box.classList.remove('active')
        pictureactive = false
    }
})

element2.addEventListener('click', () => {
    const x = Math.floor(Math.random() * pages.length)
    window.location.href = pages[x]
})


let musicactive = false

element3.addEventListener('click', () => {
    if (musicactive == true) {
        document.getElementById(music).pause()
        element3.classList.remove('active')
        musicactive == false
        // document.getElementById(music).currentTime = 0;
    } else {
        document.getElementById('music').play()
        element3.classList.add('active')
        musicactive == true
    }
})
