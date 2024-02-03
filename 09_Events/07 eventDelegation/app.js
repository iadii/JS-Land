const btn = document.querySelector("#btn");
const list = document.querySelector("#list"); //ul
const form = document.querySelector("#twtForm");

// it will remove the pre added li
// but it won't remove the li which is added using tweet button
// cause there is no click listener on them because they were created after that.
// so for that we use eventDelegation
// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usr = form.elements.username;
  const twt = form.elements.tweet;
  addTweet(usr.value, twt.value);

  // resetting the value
  usr.value = "";
  twt.value = "";
});

const addTweet = (usr, twt) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.append(usr);
  newTweet.append(bTag);
  newTweet.append(` - ${twt}`);

  //   console.log(newTweet);
  list.append(newTweet);

  //   list.appendChild(newTweet);
};

// eventDelegation is means we're going to add click event on the parent of our <li></li>, which is <ul></ul> here

// we can listen clicks on <ul></ul> but specifically clicks on li which just happen to be in ul

list.addEventListener("click", (e) => {
//   if (e.target.nodeName === "LI") {
//     e.target.remove();
//   }

//   or better way
    e.target.nodeName ==='LI' && e.target.remove();
});

//  if we're using appendChild() either username or tweet will get removed at a time
//  but using append both will get removed at same time
