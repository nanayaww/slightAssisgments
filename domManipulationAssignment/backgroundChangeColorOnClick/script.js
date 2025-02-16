const changeColorButton = document.getElementById('changeColor');


changeColorButton.style.backgroundColor = "black"

changeColorButton.addEventListener('click', ()=>{
    if (changeColorButton.style.backgroundColor === "black") {
        changeColorButton.style.backgroundColor = "blue"
    } else {
        changeColorButton.style.backgroundColor = "black";

        changeColorButton.style.color = "white"
    }
});

