let currentSlide = 0;
let slides = document.querySelectorAll(".slide");


function nextPage() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play().catch(() => {
    console.log("Autoplay blocked until user interaction");
  });

  startSlider(); 
}


function startSlider() {
  slides.forEach(slide => slide.classList.remove("active"));
  currentSlide = 0;
  slides[0].classList.add("active");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 2500);
}

function showFinal() {
  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");
}
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);


