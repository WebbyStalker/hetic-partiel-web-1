// Burger Mobile

var btnMobileMenu = document.querySelector('#menu_mobile');
var mobileMenuState = false;

btnMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  if (mobileMenuState === false) {
    document.querySelector('#mainav').style.display = "block";
    mobileMenuState = true;
  } else {
    document.querySelector('#mainav').style.display = "";
    mobileMenuState = false;
  }
}