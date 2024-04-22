const btn = document.querySelector('#stop')

// document.querySelector('h1').innerHTML = `Aditya aur JS`

// i want this change in heading but after 2 sec

var changeMe = setTimeout(() => {
    document.querySelector('h1').innerHTML = `Aditya aur Js`
},2000)

btn.addEventListener('click', () => {
    clearTimeout(changeMe)
    console.log("stoppped")
})