const h1 = document.createElement("h1");
const body = document.querySelector("body");
const btn = document.querySelector("#btn");

h1.style.display = "block";

btn.addEventListener("click", () => {
  let color = makeRandCol();
  body.style.backgroundColor = color;

  h1.innerText = color;

//   btn.insertAdjacentElement('beforebegin ',h1);
    btn.before(h1)
  h1.classList.add("col");
});

const makeRandCol = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green}, ${blue})`;
};
