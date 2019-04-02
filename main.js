let hogwartsHouse = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const startButton = document.getElementById('startButton');
//const inputText = document.getElementById('nameInput');
//printToDom function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const clearForm = () => {
    const inputText = document.getElementById('sortingId');
     inputText.innerHTML = '';
 };

const studentCardBuilder = (cardToPrint) =>{
    let randomHouse = Math.floor((Math.random() * hogwartsHouse.length));
    let studentCard = '';
    cardToPrint.forEach((student) => {
        studentCard += `<div class="card" style="width: 18rem;">`;
        studentCard +=      `<div class="card-body">`;
        studentCard +=          `<h5 class="card-title">${inputText.value}</h5>`;
        studentCard +=          `<p class="card-text">Your new House is <h2>${randomHouse[hogwartsHouse]}!!!</p>`;
        studentCard +=          `<button href="#" class="btn btn-danger deleteButton">Expel!</button>`;
        studentCard +=      `</div>`;
        studentCard += `</div>`;
        printToDom ('studentId', studentCard);
    });
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
    const sortButton = document.getElementById('sortButton');
    sortButton.addEventListener('click', clearForm);
};




const buttonEvent = () => {
    startButton.addEventListener('click', showSortForm);
   
    // if (sortButton) {
    // addEventListener('click', function (e) {
    //     clearForm();
    // });
    // };
};
buttonEvent();












