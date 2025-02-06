const phrases = [
    "Desenvolvedor FullStack",
    "Estudante de Desenvolvimento",
    "Apaixonado por Tecnologia"
];

let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
const speed = 100; 
const textElement = document.getElementById("dynamic-text");

function typeEffect() {
    let currentText = phrases[currentPhrase];
    let displayedText = isDeleting 
        ? currentText.substring(0, currentLetter--) 
        : currentText.substring(0, currentLetter++);

    textElement.innerHTML = displayedText;

    let typingSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && displayedText === currentText) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && displayedText === "") {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
