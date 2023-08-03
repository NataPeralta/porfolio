const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const btnDarkMode = document.getElementById("dark-mode")
const rootBody = document.querySelector(':root');
const body = document.body;

/*** Initial Overlay ***/
document.addEventListener('DOMContentLoaded', () => {
  const opacityMode = document.querySelectorAll('.opacityMode');
  opacityMode.forEach((element) => {
    element.style.opacity = 0;
  });
  setTimeout(() => {
    document.getElementById("content-loader").setAttribute("aria-hidden", "true");
    document.getElementById("content-loader").classList.add("fadeOut")
  }, 1400);
  setTimeout(() => {
    document.getElementById("content-loader").classList.add("is-loaded");
  }, 1700);
});

/*** Identify LocalStorage Dark-Mode  ***/
const darkMode_localStorage = localStorage.getItem("dark-mode");
console.log(darkMode_localStorage)
if (darkMode_localStorage == "true") {
  body.setAttribute("dark-mode", true)
  console.log("entro")
  document.querySelector("input#btn-darkmode").checked = true;
} else {
  body.setAttribute("dark-mode", false)
  console.log("no entro")
  document.querySelector("input#btn-darkmode").checked = false;
}

/*** Change Dark/Light Mode  ***/
btnDarkMode.addEventListener('click', (e) => {
  if (e.srcElement.checked) {
    localStorage.setItem('dark-mode', Boolean(true));
    body.setAttribute("dark-mode", true)
  } else {
    localStorage.setItem('dark-mode', Boolean(false));
    body.setAttribute("dark-mode", false)
  }
});

/*** Contact Form  ***/
(function() {emailjs.init('YfCUJRSx6CTqh38Be');})();
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000 | 0;
    emailjs.sendForm("service_69prf2i", "template_ly3nmid", this)
      .then(function() {
        console.log('SUCCESS!');
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
}