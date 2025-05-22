// Navigation
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const topArrow = document.querySelector("#top-arrow");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    topArrow.classList.remove("hidden");
    topArrow.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    topArrow.classList.add("hidden");
    topArrow.classList.remove("flex");
  }
};

// Navigation Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Click Outside Nav
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//  Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const iconTheme = document.querySelector('#theme-icon');

// Apply theme based on localStorage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  darkToggle.checked = true; 
} else {
  document.documentElement.classList.remove('dark');
  darkToggle.checked = false;
  iconTheme.classList.add('ri-moon-line'); 
  iconTheme.classList.remove('ri-sun-line');
}

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    iconTheme.classList.add('ri-sun-line');
    iconTheme.classList.remove('ri-moon-line');
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    iconTheme.classList.add('ri-moon-line');
    iconTheme.classList.remove('ri-sun-line');
  }
});
