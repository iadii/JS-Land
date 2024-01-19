const newDiv = document.createElement('div')
console.log(newDiv); 
// <div></div>

// setting class and id to div

newDiv.className = 'main'
// newDiv.id =  'myId'

const divId = newDiv.id = Math.floor(Math.random() * 10 ) + 1
console.log(divId);

newDiv.style.backgroundColor = 'green'

newDiv.setAttribute('title', 'just title')

console.log(newDiv);

// newDiv.innerText = "Hello World" 
newDiv.style.padding = '12px'

const adText = document.createTextNode('Chai aur code')

newDiv.appendChild(adText)

// attaching to body so it can be shown

document.body.appendChild(newDiv)


// new Element
const div2 = document.createElement('div')

div2.style.backgroundColor = 'red'
div2.style.padding = '12px'

const adText2 = document.createTextNode('Author : Aditya Mishra')
div2.appendChild(adText2)
document.body.appendChild(div2)


