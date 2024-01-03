const courses = [
    {
        name : "Js course",
        price : 1999
    },
    {
        name : "py course",
        price : 999
    },
    {
        name : "web Dev course",
        price : 2999
    },
    {
        name : "Mobile Dev course",
        price : 5999
    },
    {
        name : "Data Science course",
        price : 12999
    },
]

const sumPrice = courses.reduce((acc, item) => acc + item.price , 0)
console.log(sumPrice);