
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
hamburger.onclick = function () {
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
  let moveX = (x - BoxWidth / 2)
  let moveY = (y - BoxHeight / 2)
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
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})

//----------------------------------------------------------------------------------------------

// MOVING CARDS 

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400
});
//----------------------------------------------------------------------------------------------

// Function to reset the form

let myForm = document.getElementById('myForm');
let formButton = document.getElementById('formButton');
formButton.addEventListener('click', () => {

  setInterval(() => {
    myForm.reset();
  }, 1000);
});

//----------------------------------------------------------------------------------------------

// MOUSE 

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

//----------------------------------------------------------------------------------------------

const sections = document.querySelectorAll('#slide1, #slide2, #slide3, #slide4');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Adjust this value as needed
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get the ID of the currently visible section
      const targetId = entry.target.getAttribute('id');

      // Remove active class from all navbar links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Add active class to the corresponding navbar link
      const activeLink = document.querySelector(`nav a[href="#${targetId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

// Observe each section
sections.forEach((section) => observer.observe(section));


// Add smooth scroll behavior when a navbar link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
