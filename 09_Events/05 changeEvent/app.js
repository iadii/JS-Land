const inp = document.querySelector('input')
const h1 = document.querySelector('h1')

// change event fires when you click some where outside a input scope(blur the input) after writing or changing something
// inp.addEventListener('change', (e) => {
    // h1.innerText = inp.value;

//     console.log("change Event");
// })

// this event fires whenever value of input gets changes
// value of h1 gets changes live
inp.addEventListener('input', (e) => {
    h1.innerText = inp.value;
    console.log("Input Event");
})