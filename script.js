// Typed.js initialization
var typed = new Typed(".typed-text", {
  strings: ["Full Stack Developer", "Python Programmer", "Web Designer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// AOS initialization
AOS.init({
  duration: 1200,
  once: true
});

// Scroll to Top button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light Mode Toggle
const toggleModeBtn = document.getElementById("toggleModeBtn");

toggleModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    toggleModeBtn.textContent = "Dark Mode";
  } else {
    toggleModeBtn.textContent = "Light Mode";
  }
});
