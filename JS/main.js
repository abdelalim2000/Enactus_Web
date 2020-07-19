/* Nav Logic and animation */

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 70);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

/* Modal logic */
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
});
