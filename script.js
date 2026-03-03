document.addEventListener("DOMContentLoaded", function () {

    /* ================= SHOW MORE / SHOW LESS ================= */

    const toggleBtn = document.getElementById("toggleBtn");
    const extraSkills = document.querySelectorAll(".extra-skill");

    if (toggleBtn) {
        let expanded = false;

        extraSkills.forEach(skill => {
            skill.style.display = "none";
        });

        toggleBtn.addEventListener("click", function () {
            extraSkills.forEach(skill => {
                skill.style.display = expanded ? "none" : "block";
            });

            toggleBtn.textContent = expanded ? "Show More" : "Show Less";
            expanded = !expanded;
        });
    }


    /* ================= CONTACT FORM (GOOGLE SHEET + POPUP) ================= */

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbwzKSkF-BKdKTC22fCDoPQhqe-YPEg2COJUs_eZ0fH2X4Bj_R2a9XwUUFKmRgWThDZBiA/exec";

    const form = document.getElementById("contactForm");
    const popup = document.getElementById("successPopup");

 if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Show popup immediately
        if (popup) {
            popup.style.display = "flex";
        }

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        }).catch(error => {
            console.error("Error:", error);
        });

        form.reset();
    });
}

    // Close popup
    window.closePopup = function () {
        if (popup) {
            popup.style.display = "none";
        }
    };


    /* ================= TYPING EFFECT ================= */

    const roles = [
        "Java Developer ",
        "Web Designer ",
        "MERN Stack Developer "
    ];

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {

            let currentRole = roles[roleIndex];

            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex--);
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex++);
            }

            let typingSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typingSpeed = 1500;
                isDeleting = true;
            }
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 300;
            }

            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    }

});