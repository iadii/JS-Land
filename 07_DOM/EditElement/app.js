// create a function that adds a list to ul
// it will traverse thw whole tree and add it to last
// so it is not good for optimization
const addLanguage = (langName) =>{
    const li = document.createElement('li') 
    li.innerHTML = `${langName}`
    const ul =document.querySelector('.lang')
    ul.appendChild(li)
    
    // li.style.listStyle = 'none'
}
addLanguage('Typescript')
addLanguage('Python')


// optimized approach
// in this we don't need to traverse the whole tree rather we just create a li element and textNode for it and append it.
const addOptiLang = (langName) => {

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    // const addText = document.createTextNode(langName)
    // li.appendChild(addText)
    document.querySelector('.lang').appendChild(li)
}

addOptiLang('Golang')
addOptiLang('Java')


// Edit Element

const editedLang = document.querySelector('li:nth-child(2)')

// can be edited but not optimised as it traverse whole tree 
// editedLang.innerHTML = "C++"

// optimized
// in this whole li will get created a
const newLi = document.createElement('li')
newLi.textContent = 'C++' 
// replace the old one 
editedLang.replaceWith(newLi)

// Another oner
const editedSeclang = document.querySelector('li:nth-child(4)')

const newSec = document.createElement('li')
newSec.textContent = 'Ruby'
editedSeclang.replaceWith(newSec)


// AnogherWay to edit
const lastLang = document.querySelector('li:last-child')
lastLang.outerHTML = '<li> Bhailang </li>'

// Removing Element

const removeEle = document.querySelector('li:nth-Child(4)')
removeEle.remove()