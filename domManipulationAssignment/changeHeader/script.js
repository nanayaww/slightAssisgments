const headerName = document.getElementById('thename');
const namefield = document.getElementById('name');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();   
    headerName.textContent = `${namefield.value}`;
    reset()
})

function reset() {
    namefield.value = ''
}