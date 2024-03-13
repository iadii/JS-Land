const h1 = document.createElement("h1");
const body = document.querySelector("body");

h1.innerHTML = "Callback Hell";
body.appendChild(h1);

// so whatever we did in index.js as nested setTimeout method
// we can use this as function

const colorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

// again dev have to calculate the time according to previous method
// colorChange('red', 2000)
// colorChange('blue', 3000)

// so we will enter in callback hell
// this method is super common
colorChange("red", 1000, () => {
  colorChange("blue", 1000, () => {
    colorChange("green", 1000, () => {
      colorChange("teal", 1000, () => {
        colorChange("purple", 1000, () => {
          colorChange("green", 1000, () => {
            colorChange("yellow", 1000, () => {
              colorChange("orange", 1000, () => {
                colorChange("pink", 1000, () => {
                  colorChange("hotpink", 1000, () => {
                    colorChange("steelblue", 1000, () => {
                      colorChange("white", 1000, () => {
                        colorChange("black", 1000, () => {
                          colorChange("red", 1000, () => {
                            colorChange("blue", 1000, () => {
                              colorChange("grey", 1000, () => {
                                colorChange("yellow", 1000, () => {
                                  colorChange("pink", 1000, () => {
                                    colorChange("hotpink", 1000, () => {
                                      colorChange("violet", 1000, () => {
                                        colorChange("brown ", 1000, () => {});
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
