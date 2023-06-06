
// Get header:
const header = document.getElementsByTagName('header')

// Get input element
const inputElement = document.getElementById('user_input')

// Get list
const list = document.getElementById('items_list')

// Get add button
const add_button = document.getElementById('add_button')


// Click add-button to add text to list:
add_button.addEventListener('click', renderList);


// Enter - add text
inputElement.addEventListener('keyup', (event) =>{
    if(event.code === 'Enter') {
        renderList();
    }
})

// Retrieve items from local storage
const storedItems = JSON.parse(localStorage.getItem('groceryList')) || []

// Render stored items on page load
storedItems.forEach((item) => {
    const liElement = createListItem(item.text, item.bought)
    list.appendChild(liElement)
})

// Function som legger noe til listen. Function som fjerner noe med knapp.

function renderList() {
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    list.appendChild(liElement)

    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'x';
    liElement.appendChild(buttonRemove)

    buttonRemove.addEventListener('click', () => {
        liElement.parentNode.removeChild(liElement)
    })

// Når man trykker så kommer eller forsvinner.

    liElement.addEventListener('click', () => {
        liElement.classList.add('bought')
    })

    liElement.addEventListener('dblclick', () => {
        liElement.classList.remove('bought')
    })
}