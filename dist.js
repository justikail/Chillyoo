// Hamburger Toggle
const navibar = document.querySelector(".navigation");

document.querySelector("#hamburger-menu").onclick = () => {
  navibar.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navibar.contains(e.target)) {
    navibar.classList.remove("active");
  }
});
