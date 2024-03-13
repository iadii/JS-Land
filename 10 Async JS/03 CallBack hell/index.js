// const h1 = document.createElement('h1')
// const body = document.body

// h1.innerHTML = 'Callback Hell'
// body.appendChild(h1)

// using setTimeout
// i want to change the background color of body
// first red the after sometime orange then yellow and so on....

// but the problem using this method is that we need to calculate the time every time according to previous setTime method
// setTimeout(() => {
//     body.style.backgroundColor = 'red'
// }, 1000);
// setTimeout(() => {
//     body.style.backgroundColor = 'orange'
// }, 1000);
// setTimeout(() => {
//     body.style.backgroundColor = 'yellow'
// }, 1000);
// setTimeout(() => {
//     body.style.backgroundColor = 'green'
// }, 1000);

// so there is better approach  is using nested setTime methods
// dev don't have to calculate the time according to previous setTime Method
setTimeout(() => {
  body.style.backgroundColor = "purple";
  setTimeout(() => {
    body.style.backgroundColor = "teal";
    setTimeout(() => {
      body.style.backgroundColor = "orange";
      setTimeout(() => {
        body.style.backgroundColor = "yellow";
        setTimeout(() => {
          body.style.backgroundColor = "blue";
          setTimeout(() => {
            body.style.backgroundColor = "green";
            setTimeout(() => {
              body.style.backgroundColor = "red";
              setTimeout(() => {
                body.style.backgroundColor = "tomato";
                setTimeout(() => {
                  body.style.backgroundColor = "pink";
                  setTimeout(() => {
                    body.style.backgroundColor = "violet";
                    setTimeout(() => {
                      body.style.backgroundColor = "#534ef3";
                      setTimeout(() => {
                        body.style.backgroundColor = "#862eab";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
