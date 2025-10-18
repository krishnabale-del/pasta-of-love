// 🌹 Floating hearts background
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animation = "floatUp 5s linear forwards";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 600);

// 🍝 Toggle navbar
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 🐱 Lucky Cat
const cat = document.getElementById("catImage");

cat.addEventListener("click", () => {
  cat.classList.add("shine");

  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
    cat.classList.remove("shine");
  }, 2000);
});
