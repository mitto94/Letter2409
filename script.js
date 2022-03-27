const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const textBox = document.querySelectorAll(".text-box")
const pTag = document.querySelectorAll("p");
const h1Tag = document.querySelectorAll("h1");
const h2Tag = document.querySelectorAll("h2");
const h3Tag = document.querySelectorAll("h3");
const lWord = document.getElementById("lastWord");
const button = document.querySelectorAll("button");

// Dark or Light Images
// function imageMode(color) {
//     image1.src = `img/undraw_proud_coder_${color}.svg`;
//     image2.src = `img/undraw_feeling_proud_${color}.svg`;
//     image3.src = `img/undraw_conceptual_idea_${color}.svg`;
// }

// Dark Light Mode styles

function toggleDarkLightMode(mode) {
    nav.style.backgroundColor = mode === "dark" ? `rgb(0 0 0 / 50%)` : `rgb(255 255 255 / 50%)`;
    textBox.forEach(element => {
        element.style.backgroundColor = mode === "dark" ? `#2b214d` : `#d8d7f7`;
    });
    button.forEach(element => {
        element.style.backgroundColor = mode === "dark" ? `#2b214d` : `white`;
        element.style.color = mode === "dark" ? `white` : `black`;
    })
    toggleText.textContent = mode === "dark"  ? 'Dark Mode' : 'Light Mode';
    mode === "dark" ? toggleIcon.children[0].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");
}
function increaseSize() {
    pTag.forEach(element => {
        let fontSize = parseFloat(element.style.fontSize);
        if (fontSize) {
            element.style.fontSize = `${fontSize + 0.1}rem`
        }
    })
    h1Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) + 2}px`);
        }
    })
    h2Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) + 2}px`);
        }
    })
    h3Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) + 2}px`);
        }
    })
    lWord.style.fontSize = `${parseFloat(lWord.style.fontSize) + 0.1}vw`
}
function decreaseSize() {
    pTag.forEach(element => {
        let fontSize = parseFloat(element.style.fontSize);
        if (fontSize) {
            element.style.fontSize = `${fontSize - 0.1}rem`
        }
    })
    h1Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) - 2}px`);
        }
    })
    h2Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) - 2}px`);
        }
    })
    h3Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) - 2}px`);
        }
    })
    lWord.style.fontSize = `${parseFloat(lWord.style.fontSize) - 0.1}vw`

}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode("dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleDarkLightMode("light");
    }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme
// const currentTheme = localStorage.getItem("theme");
// console.log(currentTheme)
// if (currentTheme) {
//     document.documentElement.setAttribute("data-theme", currentTheme);
//     if (currentTheme === "dark") {
//         toggleSwitch.checked = true;
//         darkMode();
//     } 
// }





