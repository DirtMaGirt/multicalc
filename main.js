/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];
const numberToAppend = [];
const numberMemory = [];

const convertedBank = [];




// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);

    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);

    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
    const number = document.querySelector('#list-number').value;
    numbers.push(number);
    console.log(numbers);
    updateUL();
    document.querySelector('#list-number').innerText = numbers.value; // Replace that with the number of items!

    resetInput();
    // Append the number to our array.
    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.

    // Update our html.


}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();


    const index = document.querySelector('#list-number').value;

    numbers.splice(index, 1);
    updateUL();




}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    const emptyBank = [];
    event.preventDefault();
    numbers = emptyBank;
    // Clear the array of all values.


    updateUL();
    resetInput();
    // Update our html.

}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    const addBank = [];

    // Grab value to add.
    let numberToAdd = document.querySelector('#number-for-math').value;
    for (let i = 0; i < numbers.length; i++) {
        let newNumber = Number(numbers[i]) + Number(numberToAdd);
        addBank.push(newNumber);
        console.log(addBank);

    }
    numbers = addBank;

    updateUL();
    resetInput();

    // Update our html.

}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    const subBank = [];
    // Grab value to subtract.
    let numberToSubtract = document.querySelector('#number-for-math').value;
    for (let i = 0; i < numbers.length; i++) {
        let newNumber = Number(numbers[i]) - Number(numberToSubtract);
        subBank.push(newNumber);
        console.log(subBank);

    }

    numbers = subBank;

    updateUL();
    resetInput();


    // Update our html.

}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    const multiBank = [];
    // Grab value to multiply.
    let numberToMultiply = document.querySelector('#number-for-math').value;
    for (let i = 0; i < numbers.length; i++) {
        let newNumber = Number(numbers[i]) * Number(numberToMultiply);
        multiBank.push(newNumber);
        console.log(multiBank);

    }
    numbers = multiBank;
    // Multiply value by everything on the list.
    updateUL();
    resetInput();



    // Update our html.

}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    const divideBank = [];
    // Grab value to add.
    let numberToDivide = document.querySelector('#number-for-math').value;
    for (let i = 0; i < numbers.length; i++) {
        let newNumber = Number(numbers[i]) / Number(numberToDivide);
        divideBank.push(newNumber);
        console.log(divideBank);

    }
    numbers = divideBank;
    updateUL();
    resetInput();


}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for (let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#number-list');
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const ul = document.querySelector('#number-list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    ul.appendChild(newLI);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#list-number').value = '';
}