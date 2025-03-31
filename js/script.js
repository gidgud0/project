const navList = document.querySelector(".nav__list");
const hoverLeft = document.querySelector(".nav__hover-left");
const hoverRight = document.querySelector(".nav__hover-right");

let scrollInterval;

function startScroll(direction) {
  stopScroll();
  scrollInterval = setInterval(() => {
    navList.scrollBy({ left: direction * 5, behavior: "smooth" });
  }, 30);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

hoverLeft.addEventListener("mouseover", () => startScroll(-2));
hoverRight.addEventListener("mouseover", () => startScroll(2));
hoverLeft.addEventListener("mouseleave", stopScroll);
hoverRight.addEventListener("mouseleave", stopScroll);