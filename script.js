const scroller = document.getElementById("projects-scroller");
const prevButton = document.getElementById("projects-prev");
const nextButton = document.getElementById("projects-next");
const topBtn = document.getElementById("topBtn");

// Project card carousel
// direction is -1 for left, 1 for right. Moves by one card plus the gap after it.
function scrollCards(direction) {
  const card = scroller.querySelector(".project-card");
  const gap = parseFloat(getComputedStyle(scroller).columnGap);
  scroller.scrollBy({ left: direction * (card.offsetWidth + gap) });
}

function updateArrows() {
  const atStart = scroller.scrollLeft <= 1; // stores true or false - used <= 1 rather than === 0 because scrollLeft can be a fraction on zoomed or high-DPI screens so the 1px gives it some leeway
  const maxScroll = scroller.scrollWidth - scroller.clientWidth;
  const atEnd = scroller.scrollLeft === maxScroll;

  prevButton.style.visibility = atStart ? "hidden" : "visible";
  nextButton.style.visibility = atEnd ? "hidden" : "visible";
}

prevButton.addEventListener("click", () => scrollCards(-1));
nextButton.addEventListener("click", () => scrollCards(1));

// Runs after any kind of scrolling, whether it came from an arrow, a swipe or the keyboard.
scroller.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);
updateArrows();

// Go to top button
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Form Handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const msg = document.getElementById("form-msg");

    if (name && email && message) {
      msg.textContent = "Thank you for reaching out!";
      msg.style.color = "#86efac";
      this.reset();
    } else {
      msg.textContent = "Please fill in all fields";
      msg.style.color = "#fca5a5";
    }
  });
