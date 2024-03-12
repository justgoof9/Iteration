//Time slot Object for Manager page.
let timeSlots = {
    "Producer1": [
        {name : "John Doe", date: "3/10/2024", start: "1:00pm", end: "3:00pm"},
        {name : "Jane Doe", date: "3/11/2024", start: "4:00pm", end: "5:00pm"},
        {name : "Willow Smith", date: "3/12/2024", start: "6:00pm", end: "7:00pm"},
    ],
    "Producer2": [
        {name : "Bruce Wayne", date: "3/15/2024", start: "8:00pm", end: "9:00pm"},
        {name : "Frederick Barbarossa", date: "3/16/2024", start: "10:00pm", end: "11:00pm"},
    ],
    "Producer3": [
        {name : "Catherine de'Medici", date: "3/17/2024", start: "12:00am", end: "1:00am"},
    ]
}

//Inline Event handler approach
const printTimeSlots = () => {
    console.log(timeSlots);
}

//Displaying producer from the object array.
const displayTimeSlots = (pd) => {
    console.log(`Selected DJ from the function displaytimeslots(): ${pd}`);
    const listOfTimeSlots = document.querySelector('.list-of-djs ul');
    listOfTimeSlots.innerHTML = '';

    if(timeSlots[pd]) {
        timeSlots[pd].forEach((dj) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${dj.name} Date: ${dj.date} Start: ${dj.start} End: ${dj.end} </span>
                            <div class = "actions">
                                <button class = "edit-btn">Edit</button>
                                <button class = "delete-btn">Delete</button>
                           <div>;`
            listOfTimeSlots.appendChild(listItem);
        });
    }else {
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


//For login page.
const validLogin = (e) => {
    e.preventDefault();

    //Gets value of user & password input
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    if(user.value.trim().length >= 5 && pass.value.trim().length >= 5) {
        alert("Login sucessful!");
        window.location.href = './Manager.html'
    }else {
        alert("Mininum 5 characters long");

    }

}

const form = document.querySelector('form');
form.addEventListener('submit', validLogin);

