const user = {
  username: "iadii_",
  name: "Aditya",
  "System id": 2022623669,
  gender: "Male",
};

function handleObject(anyObject) {
  return `Instagram username of ${anyObject.name} is ${anyObject.username} and his System id is ${anyObject["System id"]}`;
}

console.log("Aditya : ", handleObject(user));

// we can pass object too directly in function

console.log(
  "Random : ",
  handleObject({
    username: "shubham",
    name: "Shubham",
    "System id": 2022688926,
    gender: "Male",
  })
);

// function handleObject(anyObject) {

//     if(anyObject.gender.toLowerCase() == "male"){

//         return `Instagram username of ${anyObject.name} is ${anyObject.username} and his System id is ${anyObject["System id"]}`
//     }
//     else if(anyObject.gender.toLowerCase() == "female") {
//         return `Instagram username of ${anyObject.name} is ${anyObject.username} and her System id is ${anyObject["System id"]}`

//     }
// }



