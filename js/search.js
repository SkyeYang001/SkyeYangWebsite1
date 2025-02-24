const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    // adds the active class in search
    input.focus()
    //the cursor is in search (ready to type)
})
