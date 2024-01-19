const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    // console.log(e.target);
    if (e.target.id === "grey") {
      // body.style.backgroundColor = 'grey'
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
    } else if (e.target.id === "white") {
      // body.style.backgroundColor = 'white'
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
    } else if (e.target.id === "blue") {
      // body.style.backgroundColor = 'blue'
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
    } else if (e.target.id === "yellow") {
      // body.style.backgroundColor = 'yellow'
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
    } else if (e.target.id === "red") {
      // body.style.backgroundColor = 'yellow'
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
    } else if (e.target.id === "purple") {
      // body.style.backgroundColor = 'yellow'
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
    }
  });
});
