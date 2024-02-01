const form = document.querySelector("#shelterForm");
const inp = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // it will give the value of which is submitted in input tag
  // console.log(inp.value);

  if (!(inp.value === "")) {
    const newLi = document.createElement("li");
    newLi.innerText = inp.value;

    list.appendChild(newLi);
  }
});
