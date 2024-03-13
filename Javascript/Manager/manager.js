//Time slot Object for Manager page.
let timeSlots = {
    "Producer1": [
        { name: "John Doe", date: "3/10/2024", start: "1:00pm", end: "3:00pm" },
        { name: "Jane Doe", date: "3/11/2024", start: "4:00pm", end: "5:00pm" },
        { name: "Willow Smith", date: "3/12/2024", start: "6:00pm", end: "7:00pm" },
    ],
    "Producer2": [
        { name: "Bruce Wayne", date: "3/15/2024", start: "8:00pm", end: "9:00pm" },
        { name: "Frederick Barbarossa", date: "3/16/2024", start: "10:00pm", end: "11:00pm" },
    ],
    "Producer3": [
        { name: "Catherine de'Medici", date: "3/17/2024", start: "12:00am", end: "1:00am" },
    ]
}

//Initalize page.
const initalizePage = () => {
    displayTimeSlots('Producer1');
    console.log("initalize runs");
};

window.addEventListener('load', initalizePage);

//Inline Event handler approach
const printTimeSlots = () => {
    console.log(timeSlots);
}
//Delete DJ object.
const deleteDj = (producer, index) => {
    if (confirm("Are you sure to delete this DJ's time?")) {
        timeSlots[producer].splice(index, 1);
        displayTimeSlots(producer);
    }
}

//Displaying producer from the object array.
const displayTimeSlots = (pd) => {
    console.log(`Selected DJ from the function displaytimeslots(): ${pd}`);
    const listOfTimeSlots = document.querySelector('.list-of-djs ul');
    listOfTimeSlots.innerHTML = '';

    if (timeSlots[pd]) {
        timeSlots[pd].forEach((dj) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${dj.name} Date: ${dj.date} Start: ${dj.start} End: ${dj.end} </span>
                            <div class = "actions">
                                <button class = "edit-btn">Edit</button>
                                <button class = "delete-btn">Delete</button>
                           <div>;`
            listOfTimeSlots.appendChild(listItem);
        });

        //Adding delete event listener
        document.querySelectorAll('.delete-btn').forEach((deleteBtn) => {
            deleteBtn.addEventListener('click', (e) => {
                const djDeleteIndex = parseInt(e.target.dataset.index, 10);
                deleteDj(pd, djDeleteIndex);

            });
        });
    } else {
        console.error(`No timeslots for the ${pd} found`);
    }
}

//Adding eventListener to each Producer list.
document.querySelectorAll('.producer-list ul li').forEach((producerDJ) => {
    producerDJ.addEventListener('click', (e) => {
        const djSelected = e.target.innerHTML.trim();
        console.log(`Selected DJ: ${djSelected}`);
        displayTimeSlots(djSelected);
    });
});

//Default values.
let selectedProducer = "Producer1";
let selectedDJIndex = 0;



//Editing the DJ object.
const editDJModal = (producer, djIndex) => {
    const selectedDJ = timeSlots[producer][djIndex];
    selectedProducer = producer;
    selectedDJIndex = djIndex;
    //Log to check if the function is called
    console.log('Open Edit Modal:', selectedDJ);

    //Fill the form with the selected DJ's values
    document.getElementById('djName').value = selectedDJ.name;
    document.getElementById('djDate').value = selectedDJ.date;
    document.getElementById('djStartTime').value = selectedDJ.start;
    document.getElementById('djEndTime').value = selectedDJ.end;

    //Display the modal
    const modal = document.getElementById('djModal');
    console.log('Modal Element:', modal);
    modal.showModal();
};

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('edit-btn')) {
        // Traverse up the DOM to find the closest li element
        const listItem = target.closest('li');

        //Check if the listItem exists
        if (listItem) {
            //Find the index of the listItem among its siblings
            const index = Array.from(listItem.parentElement.children).indexOf(listItem);

            //Get the selected producer based on the index
            const selectedProducer = 'Producer' + (index + 1);

            //Call the editDJModal function with the selected information
            editDJModal(selectedProducer, index);
        }
    }
});


//Close DJ modal screen.
const closeDJModal = () => {
    const modal = document.getElementById('djModal');

    //check if modal exists
    if (modal) {
        modal.close()
    } else {
        console.log("DJ Modal not found!");
    }
}

//When edited, saves the new values added and updates the object
const saveDJ = () => {
    const djName = document.getElementById('djName').value;
    const djDate = document.getElementById('djDate').value;
    const djStartTime = document.getElementById('djStartTime').value;
    const djEndTime = document.getElementById('djEndTime').value;

    //Check all the input fields are filled.
    if (!djName || !djDate || !djStartTime || !djEndTime) {
        window.alert("Fill in all the fields!");
        return;
    }

    //Update the object.
    if (selectedDJIndex !== null && selectedDJIndex !== -1) {
        if (selectedProducer) {
            timeSlots[selectedProducer][selectedDJIndex] = {
                name: djName,
                date: djDate,
                start: djStartTime,
                end: djEndTime
            };

            console.log("Updated DJ: ", timeSlots[selectedProducer][selectedDJIndex]);

            closeDJModal();

            displayTimeSlots(selectedProducer);
        } else {
            console.log("Invalid Producer selected");
        }
    } else {
        console.log("Invalid DJ info");
    }
}

//To make this function accesible from global scope.
window.closeDJModal = closeDJModal;
window.saveDJ = saveDJ;

//For login page.
const validLogin = (e) => {
    e.preventDefault();

    //Gets value of user & password input
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    if (user.value.trim().length >= 5 && pass.value.trim().length >= 5) {
        alert("Login sucessful!");
        window.location.href = './Manager.html'
    } else {
        alert("Mininum 5 characters long");

    }

}

const form = document.querySelector('form');
form.addEventListener('submit', validLogin);

