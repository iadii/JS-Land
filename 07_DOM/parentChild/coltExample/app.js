const firstBold = document.querySelector('b')

console.log(firstBold); //<b>Silkie</b>
// ! parentElement
// if we want to select the parent element of firstBold 
// it will return the parent element of firstBold whichever it is
// in this case <p></p> is parent element of firstBold
console.log(firstBold.parentElement); 

// we can access the  parent element of parentElement till root element HTML
// parent element of root element html is null
// there is no parent of null 

console.log(firstBold.parentElement.parentElement.parentElement); //<html></html>
console.log(firstBold.parentElement.parentElement.parentElement.parentElement); //null

//  ! childELement
// we can access childrenElement too like we access parentElement
// since there is only one parent of a element
// but a element can have many childElement

const para = firstBold.parentElement;

// it will return the total number of children elements of <p></p>
// which is 8
console.log(para.childElementCount);


// it return as HTMLCollection which can be iterable
console.log(para.children); //[b, b, a, a, a, a, a, a]

console.log(para.children[0]); //b
console.log(para.children[4]); //a

// ! sibling
// selecting second images
const sqrImg = document.querySelector('.square')
console.log(sqrImg.parentElement);

// it will return Text node instead of next sibling element
console.log(sqrImg.nextSibling);

// it will return Text node instead of previous sibling element
console.log(sqrImg.previousSibling);

// for getting next sibling element we can use nextElementSibling
console.log(sqrImg.nextElementSibling);

// for getting previous sibling element we can use nextElementSibling
// it will return paragraph as it's previous sibling element of first square image
console.log(sqrImg.previousElementSibling);