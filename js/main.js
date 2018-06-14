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

var lastScrollPosition = 0;
var currentScrollPosition = 0;
var ticking = false;
var headerId = 'headerRow';
var header = null;

const classes = {
  on: 'header-on',
  off: 'header-off',
};

function onScroll() {
  currentScrollPosition = window.pageYOffset;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollPosition < lastScrollPosition) {
    appear();
  } else if (currentScrollPosition > lastScrollPosition) {
    disappear();
  }
  lastScrollPosition = currentScrollPosition;
  ticking = false;
}

function appear() {
  if (header.classList.contains(classes.off)) {
    header.classList.remove(classes.off);
    header.classList.add(classes.on);
  }
}

function disappear() {
  if (header.classList.contains(classes.on) || !header.classList.contains(classes.off)) {
    header.classList.remove(classes.on);
    header.classList.add(classes.off);
  }
}

window.onload = function() {
  header = document.getElementById(headerId);
  console.log(header);
  document.addEventListener('scroll', onScroll, false);
}