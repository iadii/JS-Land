// we should use eventlistener instead of this
// we don't get that much of information
// because eventListener give ability of propagation

// there is no problem in this but this gives less features
// document.getElementById('owl').onclick = () =>{
//     // alert('owl clicked')
// }

// third parameter is by default false so we don't need to write
document.querySelector("#river").addEventListener(
  "click",
  () => {
    // alert('this time river is clicked');
  },
  false
);

// topics need to study
/**
//  * type, timeStamp, defaultPrevent
//  * target, toElement, srcElement, currentTarget
// ! interview perspective :- 
// * clientX, clientY, screenX, screenY, tiltX, tiltY
// * altkey, ctrlkey, shiftkey, keyCode
 */

// Event propagation
/**Event propagation in the DOM involves two phases: capturing, where the event moves from the outermost ancestor to the target element, and bubbling, where it moves from the target back to the outermost ancestor. This order allows capturing and handling events at different points in the DOM hierarchy. */

// document.querySelector('#images').addEventListener('click', ()=>{
//     console.log("clicked inside the list");
// }, true)

// document.querySelector('#river').addEventListener('click', ()=>{
//    console.log("river clicked");
// }, true)

// ! both cases happen if we click river only
// in false bubbling happens
// in bubbling child's event action happens first
// firstly river clicked will get printed then clicked inside the list

// in true capturing happens
// in capturing parent's event action happens first(before)
// firstly clicked inside the list will get print then river clicked

document.querySelector("#images").addEventListener(
  "click",
  () => {
    console.log("clicked inside the list");
  },
  false
);

document.querySelector("#river").addEventListener(
  "click",
  (e) => {
    console.log("river clicked");

    //    if we use stopPropagation then it doesn't goes to(execute) parent event
    // means if we clicked river it will only print river clicked
    // it won't print clicked inside the list
    // because we stopped propagation
    // e.stopPropagation();
  },
  false
);


document.getElementById('google').addEventListener('click',(e)=>{
  e.preventDefault()
  console.log('google clicked');
  e.stopPropagation()
}, false)