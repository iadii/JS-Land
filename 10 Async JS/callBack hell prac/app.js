// document.body.style.backgroundColor = `red`
// document.body.style.backgroundColor = `orange`

// we want to red for 1 sec the after that orange and after 2 sec blue
// we are using vibgyor

// setTimeout(() => {
//     document.body.style.backgroundColor = `violet`
// }, 1000)
// setTimeout(() => {
//     document.body.style.backgroundColor = `indigo`
// }, 2000)
// setTimeout(() => {
//     document.body.style.backgroundColor = `green`
// }, 3000)
// setTimeout(() => {
//     document.body.style.backgroundColor = `yellow`
// }, 4000)
// setTimeout(() => {
//     document.body.style.backgroundColor = `orange`
// }, 5000)
// setTimeout(() => {
//     document.body.style.backgroundColor = `red`
// }, 6000)

// there's a better way to do it
// that be called as callback hell
// in this we don't need to calculate times for each iteration

setTimeout(() => {
    document.body.style.backgroundColor = `violet`
    setTimeout(() => {
        document.body.style.backgroundColor = `indigo`
        setTimeout(() => {
            document.body.style.backgroundColor = `blue`
            setTimeout(() => {
                document.body.style.backgroundColor = `green`
                setTimeout(() => {
                    document.body.style.backgroundColor = `yellow`
                    setTimeout(() => {
                        document.body.style.backgroundColor = `orange`
                        setTimeout(() => {
                            document.body.style.backgroundColor = `red`
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// there's a another way we can do we'll see on index.js file