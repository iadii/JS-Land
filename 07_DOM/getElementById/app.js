// getElementById
const tit = document.getElementById('title') 
tit.style.backgroundColor = "#B1E5F2"
tit.style.color = "#F686BD"

const sec = document.getElementById('secHead')
sec.innerHTML = "Hitesh Choudhary"

document.getElementById('para').style.color = "#1F7A8C"

// getElementsByTagName

const tag = document.getElementsByTagName('img')


for (const img of tag) {
    console.log(img.src);
}

// manipulating every images
for (const img of tag) {
    img.width = '400'
}
// now all images will be same
for (const img of tag) {

    img.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

// now imaging index
for (const img of tag) {

    img.src[2] = 'hhttps://images.unsplash.com/photo-1503252947848-7338d3f92f31?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
document.getElementsByTagName('div')

// getElementsByClassName()

const bg = document.getElementsByClassName('bg-black')

var highlightedElements = document.getElementsByClassName('highlight');

// Iterate through the collection and modify styles
// for (var i = 0; i < highlightedElements.length; i++) {
//     highlightedElements[i].style.fontWeight = 'bold';
// }
