const fullName = document.getElementById('fullName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submit');

// Errors
const fullNameError = document.getElementById('fullName-error');
const passwordError = document.getElementById('password-error');
const confirmError = document.getElementById('confirmPassword-error');

function setError (ele, message) {
    const part = ele.parentElement;
    const alertDisplay = part.querySelector('.error');

    alertDisplay.innerText = message;
    alertDisplay.style.display = 'block';
}

function setSuccess (ele) {
    const part = ele.parentElement;
    const alertDisplay = part.querySelector('.error');

    alertDisplay.innerText = '';
    alertDisplay.style.display = 'none';
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();

    console.log(fullName.value.toString().length);
    checkValidity()
})



function checkValidity() {
    //FORM VALUES
    const fullNameValue = fullName.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    // fullName Check
    if(fullNameValue === '') {
        setError(fullName, 'Enter your Full name')
        
    } else if (fullNameValue.toString().length <= 3) {
        setError(fullName, 'characters must be more than 3')
    } else {
        console.log(fullNameValue.toString().toLowerCase())
        setSuccess(fullName, '')
    };

    // Password Check
    if (passwordValue === '') {
        setError(password, 'Enter your password');
    } else if (passwordValue.toString().length < 8) {
        setError(password, 'Password should be 8 0r more')
    } else {
        setSuccess(password, '')
    };

    // Confirm Password check 
    if (confirmPasswordValue === '') {
        console.log('yes');
        
        setError(confirmPassword, 'confirm your password')
    } else if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Password does not match')
    } else {
    
        setSuccess(confirmPassword, '')
    };
}
