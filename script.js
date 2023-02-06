// Toggle class active
const navbarNAv = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
// Ketika hamburger menu diklik
// cara 1
document.addEventListener("click", function (e) {
  if (hamburger.contains(e.target)) {
    navbarNAv.classList.toggle("active");
  }
});

// cara ke 2
// document.querySelector("#hamburger-menu").onclick = function () {
//   navbarNAv.classList.toggle("active");
// };

// Klik diluar sidebar untuk menghilangkan menu bar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNAv.contains(e.target)) {
    navbarNAv.classList.remove("active");
  }
});
