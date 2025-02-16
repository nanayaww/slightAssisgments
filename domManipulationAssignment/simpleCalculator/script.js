const inputField = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const multiplyBtn = document.getElementById('multiply');

const inputFieldvalue = inputField.value;

inputField.addEventListener('input', ()=> {
console.log(inputFieldvalue);

});


increaseBtn.addEventListener('click', ()=>{
    
    if(inputFieldvalue !== '') {
        ++inputFieldvalue
        console.log('yes');
        
    }
});
