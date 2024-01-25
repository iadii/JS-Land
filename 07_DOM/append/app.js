// before appending we need to create a new element

const img = document.createElement('img')
// now img tag has been created but we have to tell src for image
// but most important we need to tell where it will go
// or where img tag will be placed
img.src = 'https://images.pexels.com/photos/16139151/pexels-photo-16139151/free-photo-of-a-helmet-on-the-handlebars-of-a-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

// we have it's src but it is still not on the page\
// now we need to append it to a page

// there's two ways of appending element

// !first Method
// first one is appendChild
// it will append the new element as last element of the body
document.body.appendChild(img)
// img.style.width = '400px'

// now we are adding class to a newly added img
// becoz there are some styling add to .square
img.classList.add('square')

// new element create h3

const newH3 = document.createElement('h3')
newH3.innerText = 'I am new'
// it will also be the last element of page as appendChild append element to last

// ! second Method
// it will add the element at the end of the parent element
const p = document.querySelector('p')
document.body.appendChild(newH3)

const newImg = document.createElement('img')
newImg.src = 'https://images.pexels.com/photos/11444086/pexels-photo-11444086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

newImg.classList.add('square','alley')


// document.p.appendChild(newImg)
p.append(newImg)


// in append we can also pass direct string and append it to parent element
// we can't do that with appendChild
const toc = document.querySelector('#toc')
toc.append('I am added using toc.append()')
toc.append('yaaaayy')

// ! prepend 
// it allows insert any element as the first child of the element
toc.prepend('i am added using prepend()')

const newBold = document.createElement('b')
newBold.append('hii ') //<b>hii</b>

// now we have to append the newBold to someWhere
// document.body.prepend(newBold)
toc.prepend(newBold)

// now we to append element as sibling element
// insertAdjacentElement(position, element)
/**
 * parameters :-
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.
 */

// i want an element between Silkie chicken and silkie chicken pic
// which is first and second element

// there are two ways  to append element in between
// either we select <h1>silkie chicken</h1> and use afterend param
// or we can select <img> and use beforebegin param
// after the targeted element
const h2 = document.createElement('h2')
h2.append('Are adorable chicken')

document.querySelector('h1').insertAdjacentElement('afterend', h2)

// before the targeted element
const insertImg = document.createElement('img')
insertImg.src = 'https://images.pexels.com/photos/1179579/pexels-photo-1179579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
insertImg.classList.add('square')

document.querySelector('.alley').insertAdjacentElement('beforebegin', insertImg)
// insertImg.classList.add('drive')


//  ! after

const h3 = document.createElement('h3')
h3.innerText = 'I am appended using after()'

const h1 = document.querySelector('h1')
h1.after(h3)

// !before

const h4 = document.createElement('h4')
h4.textContent = 'I am appended using before()'
h1.before(h4)
