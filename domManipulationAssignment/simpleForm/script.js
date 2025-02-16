const namefield = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');


submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (namefield.value === '' || age.value === '' || email.value === '') {
        alert('Enter your details')
    } else {
        alertDetails();
    }
    
});

function alertDetails() {
    alert(`My name is ${namefield.value}. I am ${age.value}. My email is ${email.value}`);
}