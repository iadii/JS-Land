const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  // alert(e)
  console.log(e);
});

/**
 * keydown: This event is fired when a key on the keyboard is first pressed down.

 * keyup: This event is fired when a key on the keyboard is released after being pressed.
 */
const inp = document.querySelector("input");

// inp.addEventListener('keydown', () => {
//     console.log("keydown");
// })
// inp.addEventListener('keyup', () => {
//     console.log("keyup");
// })

// when we want to know what key we pressed
// so we will use event(e) object 
// we can use focus on using e.key, e.code and e.keyCode
inp.addEventListener("keydown", (e) => {
    // console.log(e);
    console.log("key :- ",e.key);
    console.log("keyCode :- ",e.keyCode);
    console.log("code :- ",e.code);
});

// if we want to use key event then we use window
// window is global
window.addEventListener('keydown', (e) => {
    // console.log(e.code);

    switch(e.code){
        case 'ArrowUp':
            console.log("UP");
            break;

        case 'ArrowDown':
            console.log('down');
            break;

        case 'ArrowLeft':
            console.log('left');
            break;
        
        case 'ArrowRight':
            console.log('right');
            break; 

        default:
            console.log(e.key);
            console.log('Enter arrow key');
            break
    }
})