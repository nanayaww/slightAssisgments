const headerText = document.getElementById("headerText");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const doubleCountButton = document.getElementById("doubleCount");
const countNumber = document.getElementById("count");

let count = 0;

function counterName() {
    let name = prompt("Enter your name");
    headerText.textContent = `${name}'s Counter App`;
}
document.addEventListener("DOMContentLoaded", counterName)

increaseButton.addEventListener('click', increaseCount);
decreaseButton.addEventListener('click', decreaseCount);
doubleCountButton.addEventListener('click', doubleCount);
resetButton.addEventListener('click', resetCount);

function increaseCount() {
    count++;
    countNumber.textContent = count;
}

function decreaseCount() {
    if (count > 0) {
        count--;
        countNumber.textContent = count;
    }
}

function doubleCount() {
    count *= 2;  
    countNumber.textContent = count;
}

function resetCount() {
    count = 0;  
    countNumber.textContent = count;
}