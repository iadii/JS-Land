const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
var changeBgColor
const h1 = document.querySelector('h1')

h1.innerHTML = `Start to change background color and stop to color`


start.addEventListener('click', () => {
    changeBgColor = setInterval(()=> {
        document.body.style.backgroundColor = randomColor()
    }, 1000)
})


stop.addEventListener('click',() => {
    clearInterval(changeBgColor)
    console.log('stopped');

    // since this variable is not in used then we are making it null so that memory become lil free
    changeBgColor = null
})

const randomColor = () => {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g}, ${b})`
}
