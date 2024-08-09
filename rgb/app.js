const inputRed = document.getElementById('rojo')
const inputGreen = document.getElementById('verde')
const inputBlue = document.getElementById('azul')

const textRed = document.getElementById('texto-rojo')
const textGreen = document.getElementById('texto-verde')
const textBlue = document.getElementById('texto-azul')

let red = inputRed.value
let green = inputGreen.value
let blue = inputBlue.value

textRed.textContent = red
textGreen.textContent = green
textBlue.textContent = blue

function actualizarColor(red, green, blue) {
    const colorRGB = `RGB(${red}, ${green}, ${blue})`
    document.body.style.background = colorRGB
}

inputRed.addEventListener('change', (e) => {
    red = e.target.value
    textRed.textContent = red
    actualizarColor(red, green, blue)
})

inputGreen.addEventListener('change', (e) => {
    green = e.target.value
    textGreen.textContent = green
    actualizarColor(red, green, blue)
})

inputBlue.addEventListener('change', (e) => {
    blue = e.target.value
    textBlue.textContent = blue
    actualizarColor(red, green, blue)
})