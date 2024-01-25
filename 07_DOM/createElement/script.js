let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const newElement = (text) => {
    const div = document.createElement("div");
    for (const col of colors) {
        div.style.color = col
    }
    // div.style.backgroundColor = 'beige'
    div.id = "newDiv";
    const adText = document.createTextNode(text)
    div.appendChild(adText)
    document.body.appendChild(div)
};

newElement("Aditya")
newElement("Mishra")
newElement("Sharda University")