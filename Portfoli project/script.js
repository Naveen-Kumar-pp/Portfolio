/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   1. TIME-BASED GREETING
===================================================== */

function updateGreeting() {

    const greetingElement =
        document.getElementById("greeting");

    if (!greetingElement) {
        return;
    }

    const currentHour =
        new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {

        greetingElement.textContent =
            "Good Morning";

    } else if (currentHour >= 12 && currentHour < 17) {

        greetingElement.textContent =
            "Good Afternoon";

    } else {

        greetingElement.textContent =
            "Good Evening";
    }
}


/* Run greeting when page loads */
updateGreeting();


/* =====================================================
   2. MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen =
        navLinks.classList.contains("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile menu after clicking a link */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =====================================================
   3. DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


/* Check saved theme */

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


/* Toggle theme */

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");


    if (isDark) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


/* =====================================================
   4. CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get values */

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value.trim();


    /* Clear previous errors */

    const errorMessages =
        document.querySelectorAll(".error-message");

    errorMessages.forEach(function (error) {

        error.textContent = "";

    });


    formMessage.textContent = "";

    let isValid = true;


    /* Name validation */

    if (name.length < 2) {

        document.querySelector(
            "#name + .error-message"
        ).textContent =
            "Please enter your name.";

        isValid = false;
    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        document.querySelector(
            "#email + .error-message"
        ).textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    /* Subject validation */

    if (subject === "") {

        formMessage.textContent =
            "Please select a subject.";

        isValid = false;
    }


    /* Message validation */

    if (message.length < 10) {

        document.querySelector(
            "#message + .error-message"
        ).textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    /* If everything is valid */

    if (isValid) {

        formMessage.textContent =
            "Thank you! Your message has been received. 😊";

        contactForm.reset();

        setTimeout(function () {

            formMessage.textContent = "";

        }, 5000);

    }

});


/* =====================================================
   5. SCROLL TO TOP BUTTON
===================================================== */

const scrollTopBtn =
    document.getElementById("scrollTopBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   6. ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("main section");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   7. SKILL PROGRESS ANIMATION
===================================================== */

const skillItems =
    document.querySelectorAll(".skill-item");


const skillObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const skill =
                        entry.target;

                    const level =
                        skill.dataset.level;

                    const progress =
                        skill.querySelector(
                            ".skill-progress"
                        );


                    progress.style.width =
                        level + "%";


                    observer.unobserve(skill);

                }

            });

        },

        {
            threshold: 0.3
        }

    );


skillItems.forEach(function (skill) {

    skillObserver.observe(skill);

});


/* =====================================================
   8. REVEAL PROJECT CARDS
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


const projectObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.animation =
                        "fadeInUp 0.7s ease both";


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


projectCards.forEach(function (card) {

    projectObserver.observe(card);

});


/* =====================================================
   9. CURRENT YEAR
===================================================== */

const footerYear =
    document.querySelector(".site-footer p");


if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.innerHTML =
        `&copy; ${currentYear} Naveen Kumar. All rights reserved.`;

}