// since event propagation is false by default we don't need to write it every time.
const img = document.querySelector('#images')

img.addEventListener('click', (e)=>{
    // console.log(e.target.parentNode);

    // so google doesn't work
    e.preventDefault()

    let removeIt = e.target.parentNode;

    // first approach
    // removeIt.remove()

    // second approach
    // removeIt.parentNode.removeChild(removeIt)
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(`${e.target.id} is removed`);
        removeIt.remove()
    }

})