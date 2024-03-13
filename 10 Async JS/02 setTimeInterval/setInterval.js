// Executes a function repeatedly with a specified delay between each execution (milliseconds).
// Useful for creating ongoing actions like animations or updating content periodically.
// Returns an interval ID that can be used to stop the repetitions using clearInterval().

setInterval(() => {
    console.log(Math.floor(Math.random() * 100 + 1));
}, 1000)
