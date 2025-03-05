const event1 = document.getElementById('event1')
const event2 = document.getElementById('event2')
const event3 = document.getElementById('event3')
const event4 = document.getElementById('event4')

event4.addEventListener('click', () => {
    submit()
})

let name = document.getElementById('event1').value;
let date = document.getElementById('event2').value;
let qutoe = document.getElementById('event3').value;

function submit() {
    console.log("Your good to go!");
    document.getElementById('result').innerHTML = name;
}
