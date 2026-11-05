const scroller = document.getElementById("projects-scroller");
const prevButton = document.getElementById("projects-prev");
const nextButton = document.getElementById("projects-next");

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
