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
