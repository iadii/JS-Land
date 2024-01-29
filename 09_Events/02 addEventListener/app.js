const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
btn.addEventListener('click', () => {

    // alert('clicked')
})

btn.addEventListener('dblclick', () =>{
    alert('double clicked')
})

// mouseup
// It fires when the user releases a mouse button.

btn.addEventListener('mouseup', () =>{
    alert('mouse upped')
})

// ! Why eventListener is needed

function shout(){
    console.log('shout');
}

function twist(){
    console.log('twist');
}
// using onclick only one function can run at a time
// btn2.onclick = shout;
// btn2.onclick = twist

// but using addEventListener we can run both function at a time

btn2.addEventListener('click', twist)
btn2.addEventListener('click', shout)


// we can use {once : true}
// // it means we the event will run only one time 
// btn2.addEventListener('click', twist, {once : true})
// btn2.addEventListener('click', shout)

