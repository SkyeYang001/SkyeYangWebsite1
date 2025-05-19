const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: '../images/speachdrink.jpg'
        text: "Im THirrrsty."
    },
    {
        image: '../images/speachfood.jpg'
        text: "Im hungry!"
    },
    {
        image: '../images/speachtired.jpg'
        text: Im a tired....."
    },
    {
        image: '../images/speachhurt.jpg'
        text: 'Oof! Im hurt!'
    },
    {
        image: '../images/speachhappy.jpg'
        text: 'Imma HAPPY!'
    },
    {
        image: '../images/speachangry.jpg'
        text: 'I am ANRGY!!!'
    },
        {
        image: '../images/speachsad.jpg'
        text: 'Im sad... so sad...'
    },
    {
        image: '../images/speachscared.jpg'
        text: 'AH! So scared!'
    },
    {
        image: '../images/speachoutside.jpg'
        text: 'Lets go outside.'
    },
    {
        image: '../images/speachhome.jpg'
        text: 'I want a gooo hoooommee now...'
    },
    {
        image: '../images/speachschool.jpg'
        text: 'I have to go to school!'
    },
    {
        image: '../images/speachgrandma.jpg'
        text: 'I like to go to grandmas!'
    },
]

data.forEach(createBox)

function createBox(item) {
    console.log(item)
    const box = document.createElement('div')
    box.ClassList.add('box')
    box.innerHTML =
    `
    <img src='${item.image}' alt='${item.text}'>
    <p class='info' ${item.text}></p>
    `
    main.appendChild(box)
}
