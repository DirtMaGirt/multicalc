/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];
const numberToAppend = [];
const numberMemory = []

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

    // Get the value from the input field.
    const number = document.querySelector('#list-number').value;
    numbers.push(number)
    console.log(numbers);

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    addToUL(number);

    // Now comes your part: add the item to the list.

    // Display it in next-item if it's the first item:
    if (true) { // definitely change that condition!
        document.querySelector('#list-number').innerText = number.value; // Replace that empty string with the actual item!
    }

    document.querySelector('#list-number').innerText = numbers[0] // Replace that empty string with the actual item!

    document.querySelector('#list-number').innerText = numbers.value; // Replace that with the number of items!


}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    removeLastFromPage();
    // Your code to remove it from the array  goes here!
    const numberBank = numbers.shift();
    numberMemory.push(numberBank);

    console.log(numberMemory);

    console.log(numbers);

    document.querySelector('#list-number').innerText = numbers[0] // Replace that empty string with the actual item!

    document.querySelector('#list-number').innerText = numbers.value; // Replace that with the number of items!

    // Remove the number at that index from the list.

    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    // Update our html.


}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.


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

    // Grab value to add.
    const numbers2 = [numbers.map(myFunction)];

    document.getElementById("number-for-math").innerHTML = numbers2;

    function myFunction(value) {
        return value * 2;

    }
}
console.log(numbers2)

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to subtract.
    let numberToSubtract = document.querySelector('').value;

    // Subtract value from everything on the list.


    // Update our html.

}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to multiply.
    let numberToMultiply = document.querySelector('').value;

    // Multiply value by everything on the list.


    // Update our html.

}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToDivide = document.querySelector('').value;

    // Divide value from everything on the list.


    // // Update our html.plo

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
    const ul = document.querySelector('');
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

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const indexLocation = numbers[];
    indexLocation.parentNode.removeChild(lastItem);
}