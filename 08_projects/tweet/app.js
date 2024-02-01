// ! author :- Aditya
const btn = document.querySelector('#btn')
const list = document.querySelector('#list')
const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const form = document.querySelector('#twtForm')



form.addEventListener('submit', (e) =>{
    e.preventDefault();
    

    const newLi = document.createElement('li')
    const usr = document.createElement('b')
    const twt = document.createElement('p')
    usr.innerText = inp1.value;
    twt.innerText = inp2.value;
    newLi.append(usr, twt) 


    console.log(newLi);

    list.appendChild(newLi)
})