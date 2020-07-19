/* Nav Logic and animation */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 70);
  navbar.classList.remove("z-depth-0", window.scrollY > 70);
  navbar.classList.add("z-depth-2", window.scrollY > 70);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});
