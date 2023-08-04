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
if (darkMode_localStorage == "true") {
  body.setAttribute("dark-mode", true)
  document.querySelector("input#btn-darkmode").checked = true;
} else {
  body.setAttribute("dark-mode", false)
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

/** Message from From **/
function showContactFormMessage(message) {
  contactForm.style.display = "none";
  const thanks = document.createElement('p');
  thanks.classList.add("secondary-text");
  thanks.textContent = message;
  contactForm.parentNode.insertBefore(thanks, contactForm.nextSibling);
}

/*** Contact Form  ***/
(function() {emailjs.init('YfCUJRSx6CTqh38Be');})();
window.onload = function() {
contactForm.addEventListener('submit', function(event) {
event.preventDefault();
this.contact_number.value = Math.random() * 100000 | 0;
emailjs.sendForm("service_69prf2i", "template_ly3nmid", this)
  .then(function() {
    showContactFormMessage('¡Thank you very much! We will be in touch.')
  }, function(error) {
    showContactFormMessage('¡There was an error! Please refresh the page and try again.');
  });
})
}

/** Apply GrayScale if Centered Horizontal < 767 ViewPort **/
function isElementCenteredInView(element) {
  const bounding = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const elementHeight = bounding.height;
  const elementCenterY = bounding.top + elementHeight / 2;
  const isCenteredVertically = Math.abs(viewportHeight / 2 - elementCenterY) < (elementHeight / 2 + 30);

  return isCenteredVertically;
}

function applyGrayscaleToCenteredElements() {
  const links = document.querySelectorAll('.proyects-items a');

  links.forEach(link => {
    if (isElementCenteredInView(link)) {
      link.querySelector('img').style.filter = 'grayscale(0)';
      link.querySelector('img').style.transform = 'scale(1.05)';
    } else {
      link.querySelector('img').style.filter = '';
      link.querySelector('img').style.transform = '';
    }
  });
}

window.addEventListener('resize', function() {
  if (window.innerWidth < 767) {
    window.addEventListener('scroll', applyGrayscaleToCenteredElements);
  }
});

if (window.innerWidth < 767) {
  window.addEventListener('scroll', applyGrayscaleToCenteredElements);
}
  


