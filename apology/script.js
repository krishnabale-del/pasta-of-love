// Get elements
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

// When user clicks the button
submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name) {
    localStorage.setItem("userName", name);

    // Add fade-out animation to overlay
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("fade-out");

    // After animation, go to Page 2
    setTimeout(() => {
      window.location.href = "page2.html";
    }, 1200); // must match animation duration in CSS
  } else {
    alert("Please enter your lovely name first 💕");
  }
});
