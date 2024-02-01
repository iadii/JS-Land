const usr = document.querySelector('#username')
const h1 = document.querySelector('h1')

usr.addEventListener('input', (e) =>{
    if((usr.value === '')){
        h1.innerText = `Enter Your Username`
        
    }
    else{
        h1.innerText = `Welcome, ${usr.value}`;
    }
})