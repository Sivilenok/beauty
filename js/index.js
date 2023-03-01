// menu-burger

const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const body = document.body;

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});
