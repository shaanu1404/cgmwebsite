const sidebar = document.querySelector(".sidebar");
const backdrop = document.querySelector(".backdrop");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    backdrop.style.display = "none";
  } else {
    sidebar.classList.add("active");
    backdrop.style.display = "block";
  }
});

sidebar.addEventListener("click", function () {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    backdrop.style.display = "none";
  }
});

backdrop.addEventListener("click", function () {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    backdrop.style.display = "none";
  }
});

// IMAGE SLIDER

const slider = document.querySelector(".slider");
const tracker = document.querySelector(".tracker");
let startWith = 1;
let count = startWith;
track(0);

function slide() {
  let imgs = slider.querySelectorAll(".img");
  let pos = imgs[count].getAttribute("data-index");
  slider.style.left = `-${pos * slider.clientWidth}px`;
  track(count);
  count = count < 2 ? count + 1 : 0;
}

function track(count) {
  const allSpan = tracker.querySelectorAll("span");
  allSpan.forEach(function (span) {
    span.classList.remove("active");
  });
  allSpan[count].classList.add("active");
}

setInterval(slide, 3000);
