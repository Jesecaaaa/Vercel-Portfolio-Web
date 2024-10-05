<template>
  <header class="fixed top-0 right-0 left-0 z-50 md:py-1 transition-all duration-300">
    <nav class="toptodown max-w-7xl mx-auto bg-gray-800 md:bg-transparent p-5">
      <div class="flex items-center justify-center">
        <!-- Changed justify-between to justify-center -->
        <a href="/" class="text-white font-bold text-lg flex items-center gap-3">
          <img src="./img/Logo.svg" alt="" class="w-8 h-8" /> Jes.
        </a>
        <!-- only for large devices -->
        <div class="hidden md:flex space-x-10 ml-10">
          <!-- Added margin-left to space out from the logo -->
          <a href="#home" class="text-primary hover:text-gray-300">Home</a>
          <a href="#projects" class="text-white hover:text-gray-300">About</a>
          <a href="#resume" class="text-white hover:text-gray-300">Contact</a>
        </div>
        <!-- menu button, only for mobile -->
        <div class="md:hidden absolute right-5">
          <!-- Positioned mobile button to the right -->
          <button id="mobile-menu-button" class="text-white text-2xl">
            <i class="bx bx-menu"></i>
          </button>
        </div>
      </div>

      <!-- mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden">
        <a href="#home" class="block text-white py-2 mt-3 hover:bg-gray-700">Home</a>
        <a href="#projects" class="block text-white py-2 hover:bg-gray-700">About</a>
        <a href="#resume" class="block text-white py-2 hover:bg-gray-700">Contact</a>
      </div>
    </nav>
  </header>

  <!-- banner section -->
  <section class="max-w-7xl mx-auto px-5 my-5" id="home">
    <div
      class="flex md:flex-row flex-col justify-between items-center text-white gap-4 py-10"
    >
      <div class="hometop">
        <p class="text-xl font-medium mb-4">
          Hello, <span class="text-primary">I'm</span>
        </p>
        <h1 class="font-bold text-4xl tracking-[3.22px] mb-5">Jeseca Ruelan</h1>
        <span class="text-2xl font-montserrat mb-5 typedText"></span>
        <p class="text-xl mb-12 md:w-3/4 text-justify leading-8">
          I am a well dedicated frontend developer. Strong passion of industry — A
          well-versed in HTML, CSS, and JavaScript. Can and will do various things as of
          Web Designing.
        </p>
        <button class="py-4 px-10 rounded-md bg-primary text-white font-bold">
          Let's Talk
        </button>
        <!-- social btn -->
        <div class="mt-12 mb-8 flex gap-4 items-center">
          <p>Visit Me —</p>
          <div class="flex space-x-3">
            <a href="#"><img src="./icons/instagram.svg" alt="" class="w-8 h-8" /></a>
            <a href="#"><img src="./icons/linkedIn.svg" alt="" class="w-8 h-8" /></a>
            <a href="#"><img src="./icons/twitter.svg" alt="" class="w-8 h-8" /></a>
          </div>
        </div>
      </div>
      <div class="featured-image flex items-center">
        <div class="image ml-5">
          <img src="./img/moon.jpeg" alt="avatar" class="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  </section>

  <!-- service section -->
  <section class="mx-auto px-5 text-white" id="Services">
    <div class="text-center whattop">
      <h3 class="text-primary text-3xl font-bold mb-16">What I Am Well With</h3>
    </div>
    <!-- service cards -->
    <div class="my-16 flex flex-col md:flex-row justify-around items-center gap-12">
      <div
        class="frontends w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
      >
        <div class="flex justify-center mb-4">
          <i class="fa-solid fa-font text-primary text-3xl"></i>
        </div>
        <h5 class="text-center my-5 text-xl">Frontend</h5>
        <p class="text-justify">
          I am well on using HTML, CSS, Bootstrap, Tailwind, JavaScript, and Vue when it
          comes to frontend.
        </p>
      </div>

      <div
        class="backends w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
      >
        <div class="flex justify-center mb-4">
          <i class="fa-brands fa-squarespace text-primary text-3xl"></i>
        </div>
        <h5 class="text-center my-5 text-xl">Backend</h5>
        <p class="text-justify">
          I don't have much expertise on backends but I am well on using PHP, Java, and
          Python when it comes to backend.
        </p>
      </div>

      <div
        class="databases w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
      >
        <div class="flex justify-center mb-4">
          <i class="fa-solid fa-chart-pie text-primary text-3xl"></i>
        </div>
        <h5 class="text-center my-5 text-xl">Database</h5>
        <p class="text-justify">
          I don't have much expertise on databases but I am well on using Supabase and
          PostgreSQL when it comes to databases.
        </p>
      </div>
    </div>
  </section>

  <!-- projects -->
  <section class="px-5 my-32 mx-auto max-w-7xl" id="projects">
    <div class="text-center text-white project1">
      <h3 class="text-3xl font-bold mb-5">
        Recent <span class="text-primary">Projects</span>
      </h3>
      <p class="mb-6 md:w-3/4 mx-auto">
        I bring a passion for creating user-friendly experiences and a drive design trends
        and technologies to deliver top-notch designs that meet needs and exceed their
        expectations
      </p>
    </div>
    <div class="flex md:flex-row flex-col items-center justify-between gap-8 my-20">
      <div
        class="picproj1 border border-primary shadow-xl shadow-[#5dadec3b] md:w-[741px] md:h-96 mx-auto rounded-2xl p-5 md:p-0"
      >
        <img src="./img/project-1.svg" alt="" class="p-5 w-full" />
      </div>
      <div
        class="picproj2 border border-primary shadow-xl shadow-[#5dadec3b] md:w-[741px] md:h-96 mx-auto rounded-2xl p-5"
      >
        <img src="./img/project-2.svg" alt="" class="w-full p-5" />
      </div>
    </div>
  </section>

  <!-- reviews  -->
  <section class="my-16 max-w-7xl mx-auto px-5" id="resume">
    <div class="text-center lastna">
      <p class="mb-3 font-montserrat font-medium text-white">Testimonials</p>
      <h3 class="text-primary text-3xl font-bold mb-16">What Our Customers Say</h3>
    </div>

    <!-- testimonial section -->
    <div class="swiper mySwiper lastone">
      <div class="swiper-wrapper">
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/review2.svg" alt="" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently worked with Saira on a project and was extremely impressed with
            their creativity and attention to detail. She listened to my ideas and
            provided valuable input, which helped to create a UI that was both
            aesthetically pleasing and easy to use.
          </p>
          <h5 class="text-primary mb-2">Tom Cook</h5>
          <p class="text-sm px-2">Executive Engineer</p>
        </div>
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/review1.svg" alt="" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently worked with Saira on a project and was extremely impressed with
            their creativity and attention to detail. She listened to my ideas and
            provided valuable input, which helped to create a UI that was both
            aesthetically pleasing and easy to use.
          </p>
          <h5 class="text-primary mb-2">Rick Wright</h5>
          <p class="text-sm px-2">Executive Engineer</p>
        </div>
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/review3.svg" alt="" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently worked with Saira on a project and was extremely impressed with
            their creativity and attention to detail. She listened to my ideas and
            provided valuable input, which helped to create a UI that was both
            aesthetically pleasing and easy to use.
          </p>
          <h5 class="text-primary mb-2">Alega Wind</h5>
          <p class="text-sm px-2">Software Engineer</p>
        </div>
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/review1.svg" alt="" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently worked with Saira on a project and was extremely impressed with
            their creativity and attention to detail. She listened to my ideas and
            provided valuable input, which helped to create a UI that was both
            aesthetically pleasing and easy to use.
          </p>
          <h5 class="text-primary mb-2">Rick Wright</h5>
          <p class="text-sm px-2">Digital Marketer</p>
        </div>
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/review2.svg" alt="" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently worked with Saira on a project and was extremely impressed with
            their creativity and attention to detail. She listened to my ideas and
            provided valuable input, which helped to create a UI that was both
            aesthetically pleasing and easy to use.
          </p>
          <h5 class="text-primary mb-2">Mark J.</h5>
          <p class="text-sm px-2">Software Developer</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <h4 class="text-2xl text-white pt-12 mb-12">Contact</h4>
    <div
      class="text-white md:ml-16 flex flex-col md:flex-row justify-between md:items-center gap-6"
    >
      <div class="md:w-1/3 md:pl-10">
        <h5 class="mb-3">Company</h5>
        <a href="#" class="block my-2 text-sm text-slate-300">About Us</a>
        <a href="#" class="block my-2 text-sm text-slate-300">Why Choose me</a>
        <a href="#" class="block my-2 text-sm text-slate-300">Testimonial</a>
        <a href="#" class="block my-2 text-sm text-slate-300">Contact Us</a>
      </div>

      <div class="md:w-1/3">
        <h5 class="mb-3">Resources</h5>
        <a href="#" class="block my-2 text-sm text-slate-300">Privacy Policy</a>
        <a href="#" class="block my-2 text-sm text-slate-300">Terms and Condition</a>
        <a href="#" class="block my-2 text-sm text-slate-300">Blog</a>
        <a href="#" class="block my-2 text-sm text-slate-300">Contact Me</a>
      </div>

      <div class="md:w-1/3">
        <h5 class="mb-5">Email Me:</h5>
        <div class="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            class="bg-[#2B2E3C] py-5 pl-5 rounded-lg"
          />
          <input
            type="submit"
            value="Send"
            class="bg-primary py-4 px-8 rounded-lg absolute left-44 top-1"
          />
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-slate-800 fixed bottom-0 right-0 p-2 rounded-tl-lg">
    <div class="footer-copyright text-white">
      <p>Copyright &copy; 2024 — All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly; /* Centers the entire header horizontally */
  align-items: center; /* Centers the content vertically */
  transition: background-color 0.3s ease-in-out;
}

nav {
  width: 100%;
  max-width: 100%; /* Make sure the nav spans the entire width */
}

.flex.items-center.justify-center {
  justify-content: center; /* Ensures the logo and navigation are centered */
}

.md:hidden.absolute {
  position: absolute;
  right: 20px; /* Ensures the mobile menu button stays at the right edge */
}
/*  */
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8); /* Dark background when sticky */
}
header.sticky {
  background-color: rgba(0, 0, 0, 0.8); /* Dark background on scroll */
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem; /* Keep padding the same to prevent layout shifts */
}

.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */
  border: 1px solid indigo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.swiper-slide img {
  display: block;
  width: 88px;
  height: 88px;
  object-fit: cover;
  margin: 8px auto;
}

.typedText {
  text-transform: capitalize;
  color: var(--text-color-third);
}

.featured-image {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}
.image {
  margin: auto 0;
  width: 380px;
  height: 380px;
  border-radius: 55% 45% 55% 45%;
  overflow: hidden;
  animation: imgFloat 7s ease-in-out infinite;
}
.image img {
  width: 100%;
}
@keyframes imgFloat {
  50% {
    transform: translateY(10px);
    border-radius: 45% 55% 45% 55%;
  }
}
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* RESPONSIVENESS */
@media only screen and (max-width: 1024px) {
  image,
  image img {
    width: 100%;
  }
}

@media only screen and (max-width: 900px) {
  .featured-image {
    order: 1;
    justify-content: center;
    width: 100%;
  }
}

@media only screen and (max-width: 540px) {
  main {
    overflow-x: hidden;
  }
}
</style>

<script>
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import Typed from "typed.js";

export default {
  mounted() {
    /* ----- TYPING EFFECT ----- */
    var typingEffect = new Typed(".typedText", {
      strings: ["Video Editor", "Frontend Junior", "Developer", ""],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    /* -- HOME -- */
    sr.reveal(".featured-image", { delay: 200 });
    sr.reveal(".hometop", { delay: 200 });
    sr.reveal(".whattop", { delay: 300 });
    sr.reveal(".project1", { delay: 200 });
    sr.reveal(".lastone", { delay: 300 });
    sr.reveal(".lastna", { delay: 100 });

    /* -- PROJECT BOX -- */

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

    /* -- ABOUT INFO & CONTACT INFO -- */
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });
    sr.reveal(".picproj2", { delay: 300 });

    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".frontends", { delay: 400 });
    srRight.reveal(".backends", { delay: 200 });
    sr.reveal(".databases", { delay: 500 });
    sr.reveal(".picproj1", { delay: 300 });

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const header = document.querySelector("header");

    // Toggle the mobile menu
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    // Scroll event to manage background color change and sticky class
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute("href"));
        const navHeight = document.querySelector("nav").offsetHeight;

        window.scrollTo({
          top: targetSection.offsetTop - navHeight,
          behavior: "smooth",
        });

        // Reset URL hash after scroll
        if (window.location.hash) {
          window.location.replace(window.location.pathname);
        }
      });
    });
  },
};
</script>
