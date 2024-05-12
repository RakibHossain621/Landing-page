// Menu Start
const menuButton = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const close_button = document.querySelector(".close_button");
// Menu End


// Menu 
function disableScroll() {
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.overflow = "auto";
}

function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  enableScroll();
}

menuButton.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  disableScroll();
});

close_button.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);