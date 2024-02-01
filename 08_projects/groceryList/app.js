// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Corrected selectors for product and quantity
    const pro = document.querySelector('#product');
    const qty = document.querySelector('#qty');

    const li = document.createElement('li')
    li.innerText = `${qty.value} ${pro.value}`
    list.appendChild(li)

  pro.value = ''
  qty.value = ''
})
