const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

const images = [
  "url('assets/bg.webp')",
  "url('assets/Backg2.jpg')",
  "url('assets/bg6.webp')",
//   "url('img4.jpg')"
];

let index = 0;
const slider = document.querySelector(".bg-slider");

// set initial background
slider.style.backgroundImage = images[index];

// change every 5 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.backgroundImage = images[index];
}, 5000);

