let hogwartsHouse = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const startButton = document.getElementById('startButton');
// const inputText = document.getElementById('nameInput');

const studentName = [];
let cardCounter = 1;

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const clearForm = (nameInputElement) => {
    const inputText = document.getElementById('sortingId');
    nameInputElement.value = '';
     inputText.innerHTML = '';
 };
 const deleteFunction = (e) =>{
    const buttonId = e.target.id;
    studentName.forEach((student, index) => {
        if(student.id === buttonId){
            studentName.splice(index, 1);
        }
    })
    domStringBuilder(studentName);
    addDeleteEvents();
}

const addDeleteEvents = () =>{
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for (let i = 0; i < deleteButtons.length; i ++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};

const studentCardBuilder = (cardToPrint) =>{
    let randomHouse = Math.floor((Math.random() * hogwartsHouse.length));
    console.log(randomHouse);
    let studentCard = '';
    cardToPrint.forEach((student) => {
        studentCard += `<div class="card" style="width: 18rem;">`;
        studentCard +=      `<div class="card-body">`;
        studentCard +=          `<h5 class="card-title">${student.item}</h5>`;
        studentCard +=          `<p class="card-text">Your new House is <h2>${hogwartsHouse[randomHouse]}!!!</p>`;
        studentCard +=          `<button href="#" class="btn btn-danger deleteButton">Expel!</button>`;
        studentCard +=      `</div>`;
        studentCard += `</div>`;
        printToDom ('studentId', studentCard);
    });
};

const addStudent = (e) =>{   
    console.log(e);
    e.preventDefault();
    const studentInput = document.getElementById('nameInput');
    const youngWizard = studentInput.value;
    const newStudentCard = {
        item: youngWizard,
        id: `studentName${cardCounter}`,
    };
    studentName.push(newStudentCard);
    cardCounter++;
    console.log(studentName);
    studentCardBuilder(studentName);
    addDeleteEvents();
    
    clearForm(studentInput);
}

const showSortForm = () => {
    // e.preventDefault();
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
    // addStudent();
    sortButton.addEventListener('click', addStudent);
   
    
};




const buttonEvent = () => {
    startButton.addEventListener('click', showSortForm);
    
};
buttonEvent();