const textArea = document.getElementById('textarea');
const charCount = document.getElementById('charCount')
const maxlength = textArea.getAttribute('maxlength');

textArea.addEventListener('input', () => {
    countChar();
})


function countChar() {
    let count = maxlength - textArea.value.length;

     charCount.textContent = `${count}`
}