// Navbar Shrink on Scroll
window.onscroll = function () {
    shrinkNavbar();
  };
  
  function shrinkNavbar() {
    var header = document.querySelector("header");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  
  // Slider Functionality
  document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let slideInterval = setInterval(nextSlide, 5000);
  
    function nextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }
  
    document.querySelector(".arrow.left").addEventListener("click", function () {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slides[currentIndex].classList.add("active");
    });
  
    document.querySelector(".arrow.right").addEventListener("click", function () {
      nextSlide();
    });
  
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      });
    });
  });
  