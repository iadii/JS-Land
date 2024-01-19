const form = document.querySelector('form')
// this useCase will give you empty value when you write outside of an event
// const heightVal = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', (e) => {
    // there are many default property that came with form i.e submitting to server
    // as we don't need this so, we are preventing it by method preventDefault()

    e.preventDefault()
    const heightVal = parseInt(document.querySelector('#height').value)
    const weightVal = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    let bmi;

    if(heightVal === '' || heightVal <= 0 || isNaN(heightVal) ){
        result.innerHTML = `Please Give a valid Height  = ${heightVal}`
    }
    else if(weightVal === '' || weightVal <= 0 || isNaN(weightVal) ){
        result.innerHTML = `Please Give a valid weight  = ${weightVal}`
    } else{
       bmi = (weightVal / (heightVal * heightVal / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }
    // const div = document.createElement('div')
    if (bmi < 18.6) {
        result.innerHTML += "You're Underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML += "You're fit";
    } else if (bmi >= 24.9) {
        result.innerHTML = "You're overweight";
    }
    
})