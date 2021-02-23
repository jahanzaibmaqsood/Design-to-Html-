let hamBurgerToggle = document.getElementById("hamBurger");
let collapsedMenu = document.getElementById("collapsedMenu");

hamBurgerToggle.addEventListener("click", function () {
  collapsedMenu.classList.toggle("collapsed-menu-show");
});
