const sortButton = document.getElementById('startButton');
//printToDom function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const showSortForm = () => {
    let domString = '';
    domString += `<form>`;
    domString +=    `<h2>Enter Student Name</h2>`
    domString +=    `<div class="form-group d-flex justify-content-center">`;
    domString +=        `<label for="nameInput">student name: </label>`;
    domString +=        `<input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" placeholder="Student name">`;
    domString +=    `</div>`;
    domString +=        `<small id="emailHelp" class="form-text text-muted">Welcome to Hogwarts!!!.</small>`;
    domString +=    `<button type="submit" class="btn btn-primary" id = "sortButton">Sort</button>`;
    domString += `</form>`;

    printToDom('sortingId', domString);
};
const buttonEvent = () => {
    sortButton.addEventListener('click', showSortForm);
};
buttonEvent();