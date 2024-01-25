const li = document.querySelector('li')
const ul = document.querySelector('ul')

ul.removeChild(li)

const firstb = document.querySelector('b')
firstb.parentElement.removeChild(firstb)

const sqr = document.querySelectorAll('.square')
sqr[1].remove()

const img = document.querySelector('img')
img.remove()

const h1 = document.querySelector('h1')
h1.innerText = 'Z900'

const zImg = document.createElement('img')
zImg.src = 'https://images.unsplash.com/photo-1655484303584-ceea9b21f11f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
zImg.style.width = '600px'

h1.insertAdjacentElement('afterend',zImg)