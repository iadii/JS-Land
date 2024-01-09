// traversing child element from parent element
const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);


for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML);

}

parent.children[1].style.color = 'orange'

parent.firstElementChild.style.color = '#6CD4FF'

parent.lastElementChild.style.color = '#DD1C1A'

// as it will return the first element
const dayOne = document.querySelector('.day')
console.log(dayOne);

// getting parent element from child element
console.log(dayOne.parentElement);

// next element from selected element
console.log(dayOne.nextElementSibling);

// childNodes
console.log("Nodes: ", parent.childNodes);