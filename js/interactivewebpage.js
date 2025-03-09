const event1 = document.getElementById('event1')
const event2 = document.getElementById('event2')
const event3 = document.getElementById('event3')
const event4 = document.getElementById('event4')


event1.addEventListener('mouseover', () => {
    event1.style.borderStyle = "solid"
})

event1.addEventListener('mouseout', () => {
    event1.style.borderStyle = "dashed"
})

event1.addEventListener('focus', () => {
    event1.style.height = "80px"
})

event1.addEventListener('blur', () => {
    event1.style.height = "50px"
})

event2.addEventListener('mouseover', () => {
    event2.style.borderStyle = "solid"
})

event2.addEventListener('mouseout', () => {
    event2.style.borderStyle = "dashed"
})

event2.addEventListener('focus', () => {
    event2.style.height = "80px"
})

event2.addEventListener('blur', () => {
    event2.style.height = "50px"
})

event3.addEventListener('mouseover', () => {
    event3.style.borderStyle = "solid"
})

event3.addEventListener('mouseout', () => {
    event3.style.borderStyle = "dashed"
})

event3.addEventListener('focus', () => {
    event3.style.height = "80px"
})

event3.addEventListener('blur', () => {
    event3.style.height = "50px"
})

event4.addEventListener('mouseover', () => {
    event4.style.borderStyle = "solid"
})

event4.addEventListener('mouseout', () => {
    event4.style.borderStyle = "dashed"
})

event4.addEventListener('click', () => {
    submit()
})

let background = true;


function submit() {
    console.log("Your good to go!");
    let name = document.getElementById('event1').value;
    let location = document.getElementById('event2').value;
    let quote = document.getElementById('event3').value;
    document.getElementById('result').innerHTML = "Hello " + name + "! Welcome to " + location + "! \"" + quote + "\"!";
    // document.body.style.backgroundImage = "linear-gradient(90deg, #07edb7, #9938c9)";
    if (background) {
        document.body.style.backgroundImage = "linear-gradient(90deg, #07edb7, #9938c9)";
    } else {
        document.body.style.backgroundImage = "linear-gradient(180deg, #1dd1f5, #ffed63)";
    }
    background = !background
}
