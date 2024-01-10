const clock = document.querySelector('#clock')

// it will continuously run after some interval
// it takes two parameter 1 is method and 2 is interval
// 1000 mean 1 sec  
setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString()
    
}, 1000);