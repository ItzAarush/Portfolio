
// UNDERLINE UNDER NAVBAR
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    navItems.forEach(item => item.classList.remove('active'));
    navItem.classList.add('active');
  });
});
// ------------------------------------------------------------------------------------------


//RESPONSIVE NAVBAR
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}
//----------------------------------------------------------------------------------------------

//EXPLORE BUTTON
let box = document.querySelector(".explore");
box.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = box.clientWidth 
    let BoxHeight = box.clientHeight
    let moveX = (x - BoxWidth/2)
    let moveY = (y - BoxHeight/2)
    box.style.transform = `translateX(${moveX}px)
    translateY(${moveY}px)`;
    
    });
    box.addEventListener('mouseout', (e) => {
        box.style.transform = ``;
})
//----------------------------------------------------------------------------------------------

//FLOATING EMEMETS
const floatingElements = document.querySelectorAll('.slide1');

floatingElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.animationPlayState = 'paused';
  });

  element.addEventListener('mouseleave', () => {
    element.style.animationPlayState = 'running';
  });
});
//----------------------------------------------------------------------------------------------

// MOVING NAVBAR 
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})

// Smooth scroll behavior for the entire page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Track if the user has already scrolled
var hasScrolled = false;

// Function to handle the scroll event
function handleScroll() {
  if (!hasScrolled) {
    scrollToTop();
    hasScrolled = true;
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
