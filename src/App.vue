<template>
  <header class="">
    <nav class="max-w-7xl mx-auto bg-gray-800 md:bg-transparent p-5">
      <div class="flex items-center justify-between w-full">
        <!-- Logo (Left side) -->
        <a href="/" class="text-white font-bold text-lg flex items-center gap-3">
          <img src="./img/Logo.svg" alt="Logo" class="w-8 h-8" /> Jes.
        </a>

        <!-- Navigation and Menu Button (Right side) -->
        <div class="flex items-center space-x-10 ml-auto">
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-10">
            <a href="#home" class="text-white hover:text-gray-300">Home</a>
            <a href="#Services" class="text-white hover:text-gray-300">Services</a>
            <a href="#education" class="text-white hover:text-gray-300">Education</a>
            <a href="#skills" class="text-white hover:text-gray-300">Skills</a>
            <a href="#projects" class="text-white hover:text-gray-300">About</a>
            <a href="#resume" class="text-white hover:text-gray-300">Contact</a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-white text-2xl">
              <i class="bx bx-menu"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      id="mobile-nav"
      class="fixed inset-0 bg-gray-900 bg-opacity-90 p-8 transform translate-x-full transition-transform duration-300 z-40"
    >
      <button id="close-mobile-menu" class="text-white text-2xl absolute top-5 right-5">
        <i class="bx bx-x"></i>
      </button>
      <div class="flex flex-col space-y-6 mt-10 text-center">
        <a href="#home" class="text-white text-lg">Home</a>
        <a href="#Services" class="text-white text-lg">Services</a>
        <a href="#education" class="text-white text-lg">Education</a>
        <a href="#skills" class="text-white text-lg">Skills</a>
        <a href="#projects" class="text-white text-lg">About</a>
        <a href="#resume" class="text-white text-lg">Contact</a>
      </div>
    </div>
  </header>

  <!-- banner section -->
  <section class="max-w-7xl mx-auto px-5 my-5" id="home">
    <div class="featured-image flex items-center mt-20">
      <div class="image ml-5 flex lg:hidden xl:hidden">
        <img src="./img/moon.jpeg" alt="avatar" class="min-w-full min-h-full" />
      </div>
    </div>
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
        <div class="flex">
          <button
            class="py-4 px-10 rounded-md bg-primary text-white font-bold mr-4"
            @click="redirectToGmail"
          >
            Email Me
          </button>
          <a href="https://github.com/Jesecaaaa">
            <button class="py-4 px-10 rounded-md bg-primary text-white font-bold">
              See Portfolio
            </button>
          </a>
        </div>
        <!-- social btn -->
        <div class="mt-12 mb-8 flex gap-4 items-center">
          <p>Visit Me —</p>
          <div class="flex space-x-3">
            <a href="https://www.instagram.com/yas_itsten/"
              ><img src="./icons/instagram.svg" alt="" class="w-8 h-8"
            /></a>
            <a href="https://www.linkedin.com/in/jeseca-ruelan-2892aa245/"
              ><img src="./icons/linkedIn.svg" alt="" class="w-8 h-8"
            /></a>
            <a href="https://x.com/jeseji0328?t=fjxkPd5jBJjtBHK15xQ6Gg&s=09"
              ><img src="./icons/twitter.svg" alt="" class="w-8 h-8"
            /></a>
          </div>
        </div>
      </div>
      <div class="featured-image flex items-center">
        <div class="image ml-5 hidden md:flex lg:flex xl:flex">
          <img src="./img/moon.jpeg" alt="avatar" class="min-w-full min-h-full" />
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

  <section class="education" id="education">
    <div class="text-center whattop">
      <h3 class="text-primary text-3xl font-bold mb-16">Education</h3>
    </div>
    <div class="row">
      <div class="column">
        <div class="box">
          <div class="education-content">
            <div
              class="content border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
            >
              <div class="year">2021-2024<i class="bx bxs-calendar"></i></div>
              <h3>Computer Science - CSU</h3>
              <p>
                Pursuing a Bachelor’s degree in Computer Science with a focus on software
                development and data structures.
              </p>
            </div>
          </div>
          <div class="education-content">
            <div
              class="content border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
            >
              <div class="year">2019-2021 <i class="bx bxs-calendar"></i></div>
              <p>
                Completed an associate degree in Information Technology, gaining
                foundational knowledge in programming and database management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="education-content">
            <div
              class="content border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
            >
              <div class="year">2020-2020<i class="bx bxs-calendar"></i></div>
              <h3>Web Development Bootcamp</h3>
              <p>
                Completed a web development bootcamp focused on modern web technologies
                and frameworks.
              </p>
            </div>
          </div>
          <div class="education-content">
            <div
              class="content border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
            >
              <div class="year">2021-2023 <i class="bx bxs-calendar"></i></div>
              <h3>Certifications</h3>
              <p>
                Completed certifications in Full Stack Development and Database Management
                from google.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="skills" id="skills">
    <div class="text-center">
      <h3 class="text-primary text-3xl font-bold mb-16">Skills</h3>
    </div>
    <div class="wrapper">
      <div
        class="skill-content rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
      >
        <div class="skill-box skill-box1">
          <div class="text-center whattop">
            <h3 class="text-primary text-3xl font-bold mb-16">Frontend</h3>
          </div>
          <div class="single-skill">
            <span class="topic">HTML</span>
            <span class="topic">90%</span>
          </div>
          <div class="bar-side">
            <div class="bar bar-1"></div>
          </div>
          <div class="single-skill">
            <span class="topic">CSS</span>
            <span class="topic">80%</span>
          </div>
          <div class="bar-side">
            <div class="bar bar-2"></div>
          </div>
          <div class="single-skill">
            <span class="topic">JavaScript</span>
            <span class="topic">70%</span>
          </div>
          <div class="bar-side">
            <div class="bar bar-3"></div>
          </div>
        </div>
      </div>
      <div
        class="skill-content rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl"
      >
        <div class="skill-box skill-box2">
          <div class="text-center whattop">
            <h3 class="text-primary text-3xl font-bold mb-16">Backend</h3>
          </div>
          <div class="single-skill">
            <span class="topic">Node.js</span>
            <span class="topic">85%</span>
          </div>
          <div class="bar-side">
            <div class="bar bar-2"></div>
          </div>
          <div class="single-skill">
            <span class="topic">PHP</span>
            <span class="topic">75%</span>
          </div>
          <div class="bar-side">
            <div class="bar bar-2"></div>
          </div>
          <div class="single-skill">
            <span class="topic">Python</span>
            <span class="topic">70%</span>
          </div>
          <div class="bar-side">
            <div class="bar bar-2"></div>
          </div>
        </div>
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
        I recently completed several projects, including a responsive e-commerce website
        that increased conversion rates by 30%, a collaborative portfolio site for a local
        artist featuring animations and interactive elements, a personal blog platform
        with a custom content management system, and a web application for tracking
        personal finances with user authentication and data visualization.
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
      <p class="mb-3 font-montserrat font-medium text-white">HEAD UPS</p>
      <h3 class="text-primary text-3xl font-bold mb-16">What Our Customers Say</h3>
    </div>

    <!-- testimonial section -->
    <div class="swiper mySwiper lastone mb-16">
      <div class="swiper-wrapper">
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/jelli.jpg" alt="" style="border-radius: 50%" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently collaborated with Jeseca Ruelan, a skilled backend programmer, on a
            project and was extremely impressed with her creativity and meticulous
            attention to detail. She carefully listened to my ideas and provided valuable
            input, which contributed to developing a user interface that was not only
            visually stunning but also intuitive and easy to use.
          </p>
          <h5 class="text-primary mb-2">Jelli Uayan</h5>
          <p class="text-sm px-2">Web Developer</p>
        </div>
        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/djeah.jpg" alt="" style="border-radius: 50%" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently collaborated with Jeseca Ruelan, a talented frontend programmer, on
            a project and was thoroughly impressed with her technical expertise and
            attention to detail. She skillfully translated my ideas into practical
            solutions, offering valuable insights that enhanced both the functionality and
            user experience, resulting in a system that was not only efficient but also
            intuitive and easy to navigate.
          </p>
          <h5 class="text-primary mb-2">Djeah Tabada</h5>
          <p class="text-sm px-2">Computer Engineer</p>
        </div>

        <div class="swiper-slide py-8 px-3 text-white">
          <img src="./img/tina.jpg" alt="" style="border-radius: 50%" />
          <p class="text-sm px-2 my-5 text-justify">
            I recently worked with Jeseca Ruelan on a project and was extremely impressed
            with her creativity and attention to detail. She listened to my ideas and
            provided valuable input, which helped to create a UI that was both
            aesthetically pleasing and easy to use.
          </p>
          <h5 class="text-primary mb-2">Cristina Repollo</h5>
          <p class="text-sm px-2">Software Developer</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="text-center lastna">
      <p class="mb-3 font-montserrat font-medium text-white">Contact</p>
      <h3 class="text-primary text-3xl font-bold">Let's talk</h3>
    </div>
    <div class="flex flex-wrap py-8">
      <!-- Form Section (3/4 width) -->
      <div class="w-full md:w-2/4 px-4 leftform">
        <form @submit.prevent="handleSubmit" class="mt-8 space-y-4 formtext">
          <input
            maxlength="20"
            v-model="name"
            type="text"
            placeholder="Name"
            class="text-white rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl w-full rounded-md py-3 px-4 bg-transparent focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl w-full rounded-md py-3 px-4 text-white bg-transparent focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            maxlength="30"
            v-model="subject"
            type="text"
            placeholder="Subject"
            class="rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl w-full rounded-md py-3 px-4 text-white bg-transparent focus:bg-transparent text-sm outline-blue-500"
          />
          <textarea
            v-model="message"
            placeholder="Message"
            rows="6"
            class="rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl w-full rounded-md px-4 text-white bg-transparent focus:bg-transparent text-sm pt-3 outline-blue-500"
          ></textarea>
          <button
            type="submit"
            class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
        <div v-if="toastVisible" class="toast">{{ toastMessage }}</div>
      </div>

      <!-- Image Section (1/4 width) -->
      <div class="w-full md:w-2/4 px-4 flex justify-center items-center rightform">
        <img
          src="https://tixwibgexlqwgogwyovb.supabase.co/storage/v1/object/public/cv-portfolio/hero-img.png"
          alt="Contact Image"
          class="max-w-full rounded-md shadow-lg"
        />
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
  z-index: 10;
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

.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #007bfe; /* Green background */
  color: white; /* White text */
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
}
</style>

<script>
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import Typed from "typed.js";

export default {
  data() {
    return {
      mobileMenuVisible: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      toastVisible: false,
      toastMessage: "",
    };
  },
  mounted() {
    const typingEffect = new Typed(".typedText", {
      strings: ["Video Editor", "Frontend Junior", "Developer", ""],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    /* ----- SCROLL REVEAL ANIMATION ----- */
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-image", { delay: 200 });
    sr.reveal(".hometop", { delay: 200 });
    sr.reveal(".whattop", { delay: 300 });
    sr.reveal(".project1", { delay: 200 });
    sr.reveal(".lastone", { delay: 300 });
    sr.reveal(".lastna", { delay: 100 });
    sr.reveal(".skill-box", { delay: 200 });
    sr.reveal(".skill-content", { delay: 200 });

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });
    srLeft.reveal(".education-content", { delay: 100 });
    srLeft.reveal(".box", { delay: 150 });
    srLeft.reveal(".leftform", { delay: 150 });
    sr.reveal(".picproj2", { delay: 300 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".frontends", { delay: 400 });
    srRight.reveal(".backends", { delay: 200 });
    srRight.reveal(".rightform", { delay: 150 });
    sr.reveal(".databases", { delay: 500 });
    sr.reveal(".picproj1", { delay: 300 });

    // Initialize Swiper
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 50 },
      },
    });

    document.addEventListener("DOMContentLoaded", function () {
      // Initial element check and setup
      const mobileNav = document.getElementById("mobile-nav");
      const menuButton = document.getElementById("mobile-menu-button");
      const closeButton = document.getElementById("close-mobile-menu");

      if (menuButton && mobileNav && closeButton) {
        function openMobileNav() {
          // Re-fetch the element to ensure it exists when clicked
          const navElement = document.getElementById("mobile-nav");
          if (navElement) {
            navElement.classList.remove("translate-x-full");
            document.documentElement.classList.add("overflow-hidden");
          } else {
            console.error("mobileNav not found when trying to open.");
          }
        }

        function closeMobileNav() {
          // Re-fetch the element to ensure it exists when clicked
          const navElement = document.getElementById("mobile-nav");
          if (navElement) {
            navElement.classList.add("translate-x-full");
            document.documentElement.classList.remove("overflow-hidden");
          } else {
            console.error("mobileNav not found when trying to close.");
          }
        }

        menuButton.addEventListener("click", openMobileNav);
        closeButton.addEventListener("click", closeMobileNav);
      } else {
        console.error("One or more elements not found for mobile navigation.");
      }
    });
  },
  methods: {
    handleSubmit() {
      const nameRegex = /^[A-Za-z\s]+$/;
      const subjectRegex = /^[A-Za-z\s,.\?!]+$/;
      const messageRegex = /^[A-Za-z\s,.\?!]+$/;

      if (!nameRegex.test(this.name)) {
        this.showToast("Invalid name! Only letters and spaces are allowed.");
        return;
      }

      if (!this.subject || !subjectRegex.test(this.subject)) {
        this.showToast(
          "Invalid subject! Only letters, spaces, and punctuation are allowed."
        );
        return;
      }

      if (!this.message || !messageRegex.test(this.message)) {
        this.showToast(
          "Invalid message! Only letters, spaces, and punctuation are allowed."
        );
        return;
      }

      this.showToast("Thank you for messaging!");
      this.resetForm();
    },
    showToast(message) {
      this.toastMessage = message;
      this.toastVisible = true;
      setTimeout(() => {
        this.toastVisible = false;
      }, 3000);
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
    redirectToGmail() {
      const email = "jesecaruelan@gmail.com";
      const subject = "Hire for";
      const body = "Good day, I would like to hire you";
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    },
  },
};
</script>
