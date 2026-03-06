// document.addEventListener("DOMContentLoaded", function () {

//     /* ================= SHOW MORE / SHOW LESS ================= */

//     const toggleBtn = document.getElementById("toggleBtn");
//     const extraSkills = document.querySelectorAll(".extra-skill");

//     if (toggleBtn) {
//         let expanded = false;

//         extraSkills.forEach(skill => {
//             skill.style.display = "none";
//         });

//         toggleBtn.addEventListener("click", function () {
//             extraSkills.forEach(skill => {
//                 skill.style.display = expanded ? "none" : "block";
//             });

//             toggleBtn.textContent = expanded ? "Show More" : "Show Less";
//             expanded = !expanded;
//         });
//     }


//     /* ================= CONTACT FORM (GOOGLE SHEET + POPUP) ================= */

//     const scriptURL =
//         "https://script.google.com/macros/s/AKfycbwzKSkF-BKdKTC22fCDoPQhqe-YPEg2COJUs_eZ0fH2X4Bj_R2a9XwUUFKmRgWThDZBiA/exec";

//     const form = document.getElementById("contactForm");
//     const popup = document.getElementById("successPopup");

//  if (form) {
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         // Show popup immediately
//         if (popup) {
//             popup.style.display = "flex";
//         }

//         fetch(scriptURL, {
//             method: "POST",
//             body: new FormData(form)
//         }).catch(error => {
//             console.error("Error:", error);
//         });

//         form.reset();
//     });
// }

//     // Close popup
//     window.closePopup = function () {
//         if (popup) {
//             popup.style.display = "none";
//         }
//     };


//     /* ================= TYPING EFFECT ================= */

//     const roles = [
//         "Java Developer ",
//         "Web Designer ",
//         "MERN Stack Developer "
//     ];

//     const typingElement = document.getElementById("typing");

//     if (typingElement) {

//         let roleIndex = 0;
//         let charIndex = 0;
//         let isDeleting = false;

//         function typeEffect() {

//             let currentRole = roles[roleIndex];

//             if (isDeleting) {
//                 typingElement.textContent = currentRole.substring(0, charIndex--);
//             } else {
//                 typingElement.textContent = currentRole.substring(0, charIndex++);
//             }

//             let typingSpeed = isDeleting ? 50 : 100;

//             if (!isDeleting && charIndex === currentRole.length) {
//                 typingSpeed = 1500;
//                 isDeleting = true;
//             }
//             else if (isDeleting && charIndex === 0) {
//                 isDeleting = false;
//                 roleIndex = (roleIndex + 1) % roles.length;
//                 typingSpeed = 300;
//             }

//             setTimeout(typeEffect, typingSpeed);
//         }

//         typeEffect();
//     }

// });


document.addEventListener("DOMContentLoaded",function(){

const menuIcon=document.getElementById("menuIcon");
const navLinks=document.getElementById("navLinks");

menuIcon.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

/* Scroll Progress */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.querySelector(".scroll-bar").style.width=progress+"%";

});

/* Skills Show More */

const toggleBtn=document.getElementById("toggleBtn");
const extraSkills=document.querySelectorAll(".extra-skill");

let expanded=false;

toggleBtn.addEventListener("click",()=>{

extraSkills.forEach(skill=>{
skill.style.display=expanded?"none":"block";
});

toggleBtn.textContent=expanded?"Show More":"Show Less";

expanded=!expanded;

});

/* Typing Effect */document.addEventListener("DOMContentLoaded", function () {


/* ================= MOBILE NAVBAR ================= */

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon) {
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}


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

        if (popup) {
            popup.style.display = "flex";
        }

        fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })
        .catch(error => {
            console.error("Error:", error);
        });

        form.reset();
    });

}

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

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 300;

        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}


/* ================= SCROLL PROGRESS BAR ================= */

window.addEventListener("scroll", function () {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const scrollBar = document.querySelector(".scroll-bar");

    if (scrollBar) {
        scrollBar.style.width = progress + "%";
    }

});


/* ================= SCROLL REVEAL ANIMATION ================= */

if (typeof ScrollReveal !== "undefined") {

ScrollReveal().reveal('.section-title', {
    distance: "50px",
    origin: "bottom",
    duration: 800
});

ScrollReveal().reveal('.skill-card, .edu-card, .project-card', {
    interval: 200,
    distance: "40px",
    origin: "bottom"
});

}

});

const roles=["Java Developer","Web Designer","MERN Stack Developer"];

let roleIndex=0;
let charIndex=0;
let typing=document.getElementById("typing");
let deleting=false;

function type(){

let current=roles[roleIndex];

if(deleting){

typing.textContent=current.substring(0,charIndex--);

}else{

typing.textContent=current.substring(0,charIndex++);

}

if(!deleting && charIndex===current.length){

deleting=true;
setTimeout(type,1500);
return;

}

if(deleting && charIndex===0){

deleting=false;
roleIndex=(roleIndex+1)%roles.length;

}

setTimeout(type,deleting?50:100);

}

type();

/* Scroll Reveal */

ScrollReveal().reveal(".section-title",{distance:"50px",origin:"bottom",duration:800});

ScrollReveal().reveal(".skill-card,.edu-card,.project-card",{interval:200,distance:"40px"});

});

/* Popup */

function closePopup(){
document.getElementById("successPopup").style.display="none";
}