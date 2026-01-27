/* knapp for å bytte fargetema på nettsiden. */
const button = document.getElementById("theme-toggle-button");
const body = document.querySelector("body");

button.addEventListener('click', () => {
    toggleTheme()
})

function toggleTheme() {
    body.classList.toggle("light")
}

