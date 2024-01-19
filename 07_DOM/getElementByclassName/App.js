const lists = document.getElementsByClassName('lists-item')
console.log(lists)

// it will return HTMLCollection
// on HTMLCollection we can't iterate loops so we need to convert to Array

const arrLis = Array.from(lists)

arrLis.forEach((li) => {
    li.style.color = '#D496A7';
    li.style.listStyle = 'none';
    li.style.fontSize = '2em'
})

for(let li = 3; li<arrLis.length; li++){
    arrLis[li].style.color = '#6CD4FF';
}