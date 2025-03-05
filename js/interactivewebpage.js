const event1 = document.getElementById('event1')
const event2 = document.getElementById('event2')
const event3 = document.getElementById('event3')
const event4 = document.getElementById('event4')

event4.addEventListener('click', () => {
    submit()
})

function submit() {
    console.log("Your good to go!");
    let name = document.getElementById('event1').value;
    let date = document.getElementById('event2').value;
    let quote = document.getElementById('event3').value;
    document.getElementById('result').innerHTML = name + date + quote;
}
