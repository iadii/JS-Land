const btn = document.querySelector('#btn')
const body = document.querySelector('body')
btn.addEventListener('click', (e) => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = "rgb(" + red + "," + green + "," + blue + ")";
    body.style.backgroundColor = color
})

