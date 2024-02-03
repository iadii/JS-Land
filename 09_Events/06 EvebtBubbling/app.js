const btn = document.querySelector('button')
const cont = document.querySelector('#container')


// since button is inside the div
// when we click the button we clicked the div too
// we wanted to change background color of div using bu tton
// our event handler run for button but bubbles up
// that event keeps going up because div has it's own click listener
// sp we need to find the way to stop bubbling up
btn.addEventListener('click', (e) => {
    cont.style.backgroundColor = makeRandCol()
    // this will help to stop event bubbling up
    e.stopPropagation();
})

cont.addEventListener('click', () => {
    cont.classList.add('hide')
})



const makeRandCol = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red},${green}, ${blue})`;
};