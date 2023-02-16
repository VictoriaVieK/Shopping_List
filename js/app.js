// Get header:
const header = document.getElementsByClassName('header')

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

// Når man trykker så kommer eller forsvinner line-through.

    liElement.addEventListener('click', () => {
        liElement.classList.add('bought')
    })

    liElement.addEventListener('dblclick', () => {
        liElement.classList.remove('bought')
    })
}

// hei