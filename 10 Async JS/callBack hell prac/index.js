const changeColor = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext && doNext()
    },delay)
}

// Again same problem we had to calculate time
// to tackle this problem we have to add callbacks
// and we are executing it in inside the setTimeout()

// changeColor('olive', 1000)
// changeColor('hotpink', 3000)

// it is also called as callback hell
changeColor('violet' ,1000, () => {
    changeColor('indigo', 1000, () => {
        changeColor('blue', 1000, () => {
            changeColor('green', 1000, () => {
                changeColor('yellow', 1000, () => {
                    changeColor('orange', 1000, () => {
                        changeColor('red', 1000, () => {
                            changeColor('hotpink', 1000, () => {
                                console.log("sbkjsb")
                            })
                        })
                    })
                })
            })
        })
    })
})