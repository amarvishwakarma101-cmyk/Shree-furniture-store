// ==========================
// SHREE FURNITURE
// Premium Script
// ==========================

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Header Shadow
window.addEventListener('scroll', function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,0.08)";
    }

});

// Back To Top Button

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backTop.style.display = "flex";

    } else {

        backTop.style.display = "none";

    }

});

// Product Hover Animation

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Gallery Popup

const gallery = document.querySelectorAll(".gallery-grid img");

gallery.forEach(img => {

    img.addEventListener("click", function () {

        window.open(this.src);

    });

});

// Loading Animation

window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});

// Fade Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    observer.observe(sec);

});

console.log("SHREE FURNITURE Website Loaded Successfully");
