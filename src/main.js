import { createApp } from 'vue';
import './style.css';
import './index.css';
import App from './App.vue';

// Import fonts
import "@fontsource/inter"; // Default weight 400
import "@fontsource/montserrat"; // Default weight 400
import "@fontsource/open-sans"; // Default weight 400
import "@fontsource/inter/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/open-sans/700.css";

// Import Swiper and its CSS
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Import ScrollReveal
import ScrollReveal from 'scrollreveal';

// Create the Vue app
const app = createApp(App);

// Mount the Vue app
app.mount('#app');
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector("header");

// Toggle the mobile menu
mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

// Scroll event for sticky header and background color change
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("sticky");
        header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.zIndex = "1000"; // Ensure the header stays on top
        header.style.transition = "background-color 0.3s ease-in-out"; // Only transition background color
    } else {
        header.style.backgroundColor = "transparent";
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        let extraPadding = 0;
        if (window.innerWidth >= 768) {
            extraPadding = 50; // Additional padding for larger devices
        }

        window.scrollTo({
            top: targetSection.offsetTop - navHeight - extraPadding,
            behavior: 'smooth'
        });

        // Reset URL hash after scroll
        if (window.location.hash) {
            window.location.replace(window.location.pathname);
        }
    });
});

