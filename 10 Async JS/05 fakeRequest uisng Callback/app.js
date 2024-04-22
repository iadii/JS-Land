// @author Aditya
// makeRequest(() => {

// },
// () =>{

// })

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      console.log(`delay time is ${delay}`);
      failure(`connection timed out`);
    } else {
      console.log(`delay time is ${delay}`);
      success(`here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  "books.com/Home",
  (response) => {
    console.log(response);
    console.log(`congrats success one gets called`);
    console.log("Here is your success data");
    // 2nd callback request  
    fakeRequestCallback(
      "books.com/about",
      (response) => {
        console.log(`responses ${response}`);
        // another one
        fakeRequestCallback(
          `book.com/contact`,
          (response) => {
            console.log(`third response ${response}`);
            console.log(
              `we can call as much as we want but it will be hell of codes to understand`
            );
            fakeRequestCallback(
              "books.com/adii",
              (response) => {},
              (err) => {}
            );
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
    console.log(`oops failure one gets called`);
    console.log(`probably connection timed out`);
  }
);
