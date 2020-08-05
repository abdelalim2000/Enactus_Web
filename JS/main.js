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

/* magnific popup plugin config */
$(".gallery").magnificPopup({
  delegate: ".popimg",
  type: "image",
  gallery: {
    enabled: true,
  },
});

/* isotope plugin config */
var $gallery = $(".gallery").isotope({
  layoutMode: "fitRows",
  masonry: {
    columnWidth: 100,
    fitWidth: true,
  },
});

$(".filtering").on("click", "span", function () {
  var filterValue = $(this).attr("data-filter");
  $gallery.isotope({
    filter: filterValue,
  });
});

$(".filtering").on("click", "span", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

/* Glider init */
new Glider(document.querySelector(".glider"), {
  slidesToShow: 1,
  draggable: true,
  scrollLockDelay: 1,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});
