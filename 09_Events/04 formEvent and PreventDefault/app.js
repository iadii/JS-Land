// when we submit the form  
// the page gets changes but we can prevent this using e.preventDefault
// we stay  on the same of form and we can do something we form data
// e.preventDefault -> it prevents the default behavior of any element, like, opening link, preventing going to next page

const form = document.querySelector('#shelterForm');
const inp = document.querySelector('#catName')

form.addEventListener('submit', (e) => {
    // after clicking the submit button
    // it quickly console logged 'submit' then page get changes
    // console.log('submit');

    // but using e.preventDefault() page doesn't gets changes
    e.preventDefault()
})

 