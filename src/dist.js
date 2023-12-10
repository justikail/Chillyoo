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



// javascript slider
document.getElementById("next").onclick = function () {
  const widthItem = document.querySelector(".card").offsetWidth;
  document.getElementById("container").scrollLeft += widthItem;
};
document.getElementById("prev").onclick = function () {
  const widthItem = document.querySelector(".card").offsetWidth;
  document.getElementById("container").scrollLeft -= widthItem;
};
document.getElementById("next-2").onclick = function () {
  const widthItem = document.querySelector(".card-2").offsetWidth;
  document.getElementById("container-2").scrollLeft += widthItem;
};
document.getElementById("prev-2").onclick = function () {
  const widthItem = document.querySelector(".card-2").offsetWidth;
  document.getElementById("container-2").scrollLeft -= widthItem;
};
