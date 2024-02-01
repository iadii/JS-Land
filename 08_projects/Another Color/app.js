const button = document.querySelectorAll('button')
const h1s = document.querySelectorAll('h1')

const makeRandCol = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
  
    return `rgb(${red},${green}, ${blue})`;
};


for(let btn of button){
    btn.addEventListener('click',() => {
        let color = makeRandCol();
        btn.style.backgroundColor = color;
        // btn.style.color = color;
    })
}


for(let h1 of h1s){
    h1.addEventListener('click', colorize)
}

// this keyword doesn't works with arrow function

// const colorize = () => {
//     this.style.backgroundColor = makeRandCol()
// }
function colorize() {
    this.style.color = makeRandCol()
}