const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: '../images/speachdrink.jpg',
        text: "I'm THirrrsty."
    },
    {
        image: '../images/speachfood.jpg',
        text: "I'm hungry!"
    },
    {
        image: '../images/speachtired.jpg',
        text: "I'm a tired....."
    },
    {
        image: '../images/speachhurt.jpg',
        text: "Oof! Im hurt!"
    },
    {
        image: '../images/speachhappy.jpg',
        text: "Imma HAPPY!"
    },
    {
        image: '../images/speachangry.jpg',
        text: "I am ANRGY!!!"
    },
        {
        image: '../images/speachsad.jpg',
        text: "I'm sad... so sad..."
    },
    {
        image: '../images/speachscared.jpg',
        text: "AH! So scared!"
    },
    {
        image: '../images/speachoutside.jpg',
        text: "Let's go outside."
    },
    {
        image: '../images/speachhome.jpg',
        text: "I want a gooo hoooommee now..."
    },
    {
        image: '../images/speachschool.jpg',
        text: "I have to go to school."
    },
    {
        image: '../images/speachgrandma.jpg',
        text: "I like to go to grandmas!"
    }
]

data.forEach(createBox)

function createBox(item) {
    // console.log(item.text)
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML =
    `
    <img src='${item.image}' alt='${item.text}'>
    <p class='info'>${item.text}</p>
    `

    box.addEventListener('click', () => {
        setTextMessage(text)
        speakText()
    })

    main.appendChild(box)
}

// toggle text box
toggleBtn.addEventListener('click', () => {
    // console.log("Hello")
    document.getElementById('textbox').classList.toggle('show')
})

closeBtn.addEventListener('click', () => {
    document.getElementById('textbox').classList.remove('show')
})

let voices = []

function getVoices() {
    voices = speechSynthesis.getVoices()

    voices.forEach(voice => {
        const option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        voicesSelect.appendChild(option)
    })
}

// voices change

speechSynthesis.addEventListener('voiceschanged', getVoices)

getVoices()

