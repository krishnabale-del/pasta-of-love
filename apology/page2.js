const storyText = document.getElementById("storyText");
const rouletteSection = document.querySelector(".roulette-section");
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const resultBox = document.querySelector(".result");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const nextBtn = document.getElementById("nextBtn");

let spinCount = 0;

// Step 1: intro messages with fades
setTimeout(() => {
  storyText.textContent = "Oops... have we stumbled across a princess? 👑";
}, 500);

setTimeout(() => {
  storyText.classList.add("fade-in");
  storyText.textContent = "Here’s a little gift from us 🎁";
}, 3500);

setTimeout(() => {
  document.querySelector(".message-box").classList.add("hidden");
  rouletteSection.classList.remove("hidden");
}, 6000);

// Step 2: roulette spin logic
spinBtn.addEventListener("click", () => {
  spinCount++;
  const randomRotation = 720 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  setTimeout(() => {
    resultBox.classList.remove("hidden");

    if (spinCount % 2 === 1) {
      resultTitle.textContent = "💌 You've won a chance to forgive someone.";
      resultMessage.textContent =
        "Sometimes love is about letting go of anger and remembering the warmth you felt first. Forgiveness is the softest kind of strength.";
    } else {
      resultTitle.textContent = "✨ You've won a last chance — for a new start.";
      resultMessage.textContent =
        "Every love deserves a reset button. Let’s promise to write our next chapter gentler, brighter, together.";
    }

    spinBtn.textContent = "Spin Again 🎡";
    nextBtn.classList.remove("hidden");
  }, 4200);
});

// Step 3: go to page3
nextBtn.addEventListener("click", () => {
  window.location.href = "page3.html";
});
