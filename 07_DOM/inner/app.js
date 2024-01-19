const author = document.querySelector('h1 span')
author.innerText = "Aditya Mishra";


const techAdv = document.querySelector('h2')
// size = h1 * h6
const innHtm = "<h6> About Tech Advancement </h6>"
// size = h1
const innTex = "we are changing the size by innerHTML"
// techAdv.innerText = "<h1>we are changing the size by innerHTML<h1>"
techAdv.innerHTML = `${innHtm} ${innTex}`

// since we have many h2s so we have to use querySelectorAll and 
// give the desired indexing of h2 as querySelectorAll provides nodeList to manipulate the DOM

const js = document.querySelectorAll('h2')
js[1].textContent = 'Concept of JavaScript'

js[2].innerText = 'Concept of C++'
// concatinating two String 
js[2].innerHTML += '<h5>It is My Favorite language</h5>'

// const cpp = "Concept of  c++"
// const fav = '<h5>It is My Favorite language</h5>'

// js[2].innerHTML = `${cpp} ${fav}`

// this will markup tag too
console.log(document.querySelector('body').innerHTML);

// This will Show only text
console.log(document.querySelector('body').innerText);

// giving id to h1
document.querySelector('h1').id = 'whoops'

const changeColor = document.querySelector('#whoops')
changeColor.style.color = '#F2AF29'

// Changing whole background Color
const body = document.querySelector('body')

body.style.backgroundColor = "#16001E"
body.style.color = '#DADFF7'


// changing the type of input by multiple ways



const inputs =  document.querySelectorAll('input')
inputs.forEach((item) => console.log(item.getAttribute('type')))

inputs[0].type = "checkbox";

inputs[1].setAttribute('type', 'text')

inputs[2].type = 'color'

inputs[3].setAttribute('type', 'date')

for (const item of inputs) {

    // console.log(item.type);

    console.log(item.getAttribute('type'));
    
}

inputs[1].style.te