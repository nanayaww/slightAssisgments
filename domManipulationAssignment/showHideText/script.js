const myText = document.getElementById('mytext');
const myButton = document.getElementById('myButton');


myButton.addEventListener('click', (e)=> {
    e.preventDefault();
    toggle();
})

function toggle() {
    if (myText.style.display === 'block') {
        myText.style.display = 'none'
        myButton.textContent = 'Show Text'
    } else {
        myText.style.display = 'block';
        myButton.textContent = 'Hide Text'
    }
}