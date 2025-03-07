const event1 = document.getElementById('event1')
const event2 = document.getElementById('event2')
const event3 = document.getElementById('event3')
const event4 = document.getElementById('event4')

event1.addEventListener('mouseover', () => {
    event1.style.backgroundColor = "#e3be07"
})

event1.addEventListener('mouseout', () => {
    event1.style.backgroundColor = "white"
})

event2.addEventListener('mouseover', () => {
    event2.style.backgroundColor = "#e3be07"
})

event2.addEventListener('mouseout', () => {
    event2.style.backgroundColor = "white"
})

event3.addEventListener('mouseover', () => {
    event3.style.backgroundColor = "#e3be07"
})

event3.addEventListener('mouseout', () => {
    event3.style.backgroundColor = "white"
})

event4.addEventListener('mouseover', () => {
    event4.style.backgroundColor = "#f7eb0a"
})

event4.addEventListener('mouseout', () => {
    event4.style.backgroundColor = "white"
})


event4.addEventListener('click', () => {
    submit()
})

function submit() {
    console.log("Your good to go!");
    let name = document.getElementById('event1').value;
    let location = document.getElementById('event2').value;
    let quote = document.getElementById('event3').value;
    document.getElementById('result').innerHTML = "Hello " + name + "! Welcome to " + location + "! \"" + quote + "\"!";
}
