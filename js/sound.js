const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// list.loop(singular variable)
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    console.log("Your good to go!");
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime = 0;
    })
}
