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


    /* ================= CONTACT FORM (FAST POPUP + GOOGLE SHEETS) ================= */

    const scriptURL = "https://script.google.com/macros/s/AKfycbwzKSkF-BKdKTC22fCDoPQhqe-YPEg2COJUs_eZ0fH2X4Bj_R2a9XwUUFKmRgWThDZBiA/exec";

    const form = document.getElementById("contactForm");
    const popup = document.getElementById("successPopup");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            /* Show popup instantly */
            if (popup) {
                popup.style.display = "flex";
            }

            /* Send data to Google Sheets in background */
            fetch(scriptURL, {
                method: "POST",
                body: new FormData(form)
            }).catch(error => console.error("Error:", error));

            form.reset();

            /* Auto close popup after 3 seconds */
            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);
        });

    }


    /* ================= CLOSE POPUP BUTTON ================= */

    window.closePopup = function () {

        if (popup) {
            popup.style.display = "none";
        }

    };


    /* ================= TYPING EFFECT ================= */

    const roles = [
        "Java Developer",
        "Web Designer",
        "MERN Stack Developer"
    ];

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            let current = roles[roleIndex];

            if (deleting) {
                typingElement.textContent = current.substring(0, charIndex--);
            } else {
                typingElement.textContent = current.substring(0, charIndex++);
            }

            if (!deleting && charIndex === current.length) {

                deleting = true;
                setTimeout(type, 1500);
                return;

            }

            if (deleting && charIndex === 0) {

                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;

            }

            setTimeout(type, deleting ? 50 : 100);
        }

        type();
    }

});