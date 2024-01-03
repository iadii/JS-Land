const myArr = ['superman', 'spiderman', 'batman', 'ironman']

for (const key in myArr) {
    console.log(key); //0 1 2 3
    console.log(myArr[key]);
}