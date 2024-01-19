const arr = [
    {
        name : "tammy",
        text : "lolololol",
        votes : 9
    },

    {
        name : 'fishboi',
        text : 'glub glub', //i want to access it
        votes : 129397
    }
]

console.log(arr[1].text);
console.log(arr[0].text);

console.log(arr[0]["name"]);
console.log(arr[1]["votes"]);