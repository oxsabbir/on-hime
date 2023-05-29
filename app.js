
const width  = window.innerWidth
console.log(width)
const menu = document.querySelector('.menu')
const button = document.querySelector('.bar')
width > 768 ? menu.classList.remove('hidden') : ''
let temp = true;
button.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

menu.addEventListener('click',() => {
    if(width > 768) {
        return
    }
    menu.classList.toggle('hidden')
})