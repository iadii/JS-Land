const code = [
    {
        lang : "Javascript",
        extension : ".js"
    },
    {
        lang : "Java",
        extension : ".java"
    },
    {
        lang : "Python",
        extension : ".py"
    },
    {
        lang : "Ruby",
        extension : ".rb"
    },
    {
        lang : "C++",
        extension : ".cpp"
    },
]

code.forEach( (item, index) => {
    // here item is a reference of object
    // console.log(item);
    // console.log(index);

    console.log(`extension of ${item.lang} is ${item['extension']}`);
})