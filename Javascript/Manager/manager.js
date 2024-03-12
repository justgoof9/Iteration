import {timeSlots} from '../../Javascript/Manager/manager-timeslots';

//Inline Event handler approach
const printTimeSlots = () => {
    console.log(timeSlots);
}

const validLogin = (e) => {
    e.preventDefault();

    //Gets value of user & password input
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    if(user.value.trim().length >= 5 && pass.value.trim().length >= 5) {
        console.log("WTF");
        alert("Login sucessful!");
        window.location.href = './Manager.html'
    }else {
        alert("Mininum 5 characters long");

    }

}


const form = document.querySelector('form');
form.addEventListener('submit', validLogin);

