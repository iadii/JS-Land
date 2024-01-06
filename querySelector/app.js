const title = document.querySelector('a[title = "Java"]')
console.dir(title)

// anchor inside of p
const titles = document.querySelectorAll('p a')

for (const title of titles) {
    console.log(title.href );
}

const aStyles = document.querySelectorAll('a:nth-child(even)')
for (const stylee of aStyles) {

    stylee.style.color = "red"
    stylee.style.textDecoration = "none"
    
}

let images = document.querySelectorAll('img');

images.forEach(img => {
  img.style.width = '200px';
});

images = document.querySelector('img')

images.style.width = '400px'

const heading = document.querySelector('h1')
heading.style.color = "#89469f"

heading.innerText = "Hello I got updates by JS"



// changing color of links
const links = document.querySelectorAll('.toclass a')
// or by forEach

links.forEach((item) => {
  item.style.color = '#94778B'
  item.style.fontSize = '24px'
})

links[0].style.color = 'green'

console.log(links.length);
const newELement = links[links.length].innerHTML = '<li><a href="./hello">Element added by innerHTML</a></li>'

console.log(newELement);