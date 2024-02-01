// const btn = document.querySelector('button')

// btn.addEventListener('click',(e)=>{
//     alert("just don't click me")
// })


const btn1 = document.querySelector('#v2')

btn1.onclick = function(){
    console.log("you clicked me ");
    console.log('i hope it worked');
}

function scream(){
    console.log('aaaaaaaaaaaa');
    console.log('Stop touching me');
}

btn1.onmouseenter = scream

function shhh(){
    console.log('eeeeeeeewwwwwwwww');
    console.log('Stop poking me');
}

btn1.ondblclick = shhh;

document.querySelector('h1').onclick = () =>{
    console.log('baby stop');
    console.log('i said stop');
}