let hogwartsHouse = ['Gryffindor <img src = "https://i.etsystatic.com/12418370/r/il/cf0987/1399095574/il_fullxfull.1399095574_a4kg.jpg">', 'Hufflepuff <img src = "https://i.etsystatic.com/12418370/r/il/cf0987/1399095574/il_fullxfull.1399095574_a4kg.jpg">', 'Ravenclaw <img src = "https://rlv.zcache.com/harry_potter_ravenclaw_coat_of_arms_ipad_smart_cover-re20e564f7bcc40f0a4940061e327ed1c_zwpxi_540.jpg?rlvnet=1">', 'Slytherin <img src = "https://i.etsystatic.com/11471731/r/il/990af5/1393897357/il_570xN.1393897357_1ke3.jpg">'];
// let hogwartsLogo = [
//    ,
//     '',
//     '',
//     ''
// ];
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
    studentCardBuilder(studentName);
    addDeleteEvents();
}


 const addDeleteEvents = () =>{
    const deleteButtons = document.getElementsByClassName('deleteButton');
    for (let i = 0; i < deleteButtons.length; i ++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};


const studentCardBuilder = (cardToPrint) =>{
    let studentCard = '';
    cardToPrint.forEach((student) => {
        // studentCard += `<div class = "container">`;
        studentCard +=  `<div class="card">`;
        studentCard +=      `<div class="card-body">`;
        studentCard +=          `<h5 class="card-title">${student.item}</h5>`;
        studentCard +=          `<p class="card-text">Your new House is <h2>${hogwartsHouse[student.house]}!!!</p>`;
        studentCard +=          `<button href="#" class="btn btn-danger deleteButton" id = ${student.id}>Expel!</button>`;
        studentCard +=      `</div>`;
        studentCard +=  `</div>`;
        // studentCard += `</div>`;
        
    });
    printToDom ('studentId', studentCard);
};

const addStudent = (e) =>{   
    console.log(e);
    e.preventDefault();
    let randomHouse = Math.floor((Math.random() * hogwartsHouse.length));
    const studentInput = document.getElementById('nameInput');
    const youngWizard = studentInput.value;
    const newStudentCard = {
        item: youngWizard,
        id: `studentName${cardCounter}`,
        house: randomHouse
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