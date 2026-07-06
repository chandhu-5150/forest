// ======================================
// Forest Fire Prediction Dashboard
// script.js
// ======================================

// Page Fade In
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ------------------------------
// Input Animation
// ------------------------------

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {

    input.addEventListener("focus", () => {

        input.parentElement.classList.add("active");

    });

    input.addEventListener("blur", () => {

        input.parentElement.classList.remove("active");

    });

});

// ------------------------------
// Button Loading Animation
// ------------------------------

const form = document.querySelector("form");
const button = document.querySelector("button");

if (form && button) {

    form.addEventListener("submit", function () {

        button.disabled = true;

        button.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Predicting...';

    });

}

// ------------------------------
// Card Hover Effect
// ------------------------------

const cards = document.querySelectorAll(".result-card, footer div");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ------------------------------
// Input Validation
// ------------------------------

if (form) {

    form.addEventListener("submit", function (e) {

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.border = "2px solid #ff3b3b";

            } else {

                input.style.border = "2px solid transparent";

            }

        });

        if (!valid) {

            e.preventDefault();

            alert("Please fill all fields.");

            button.disabled = false;

            button.innerHTML =
                '<i class="fa-solid fa-fire"></i> Predict FWI';

        }

    });

}

// ------------------------------
// Prediction Highlight
// ------------------------------

const prediction = document.querySelector(".prediction");

if (prediction) {

    const value = parseFloat(prediction.innerText);

    if (!isNaN(value)) {

        if (value < 5) {

            prediction.style.color = "#22c55e";

        }

        else if (value < 15) {

            prediction.style.color = "#facc15";

        }

        else if (value < 30) {

            prediction.style.color = "#fb923c";

        }

        else {

            prediction.style.color = "#ef4444";

        }

    }

}

// ------------------------------
// Floating Header Effect
// ------------------------------

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {

        header.style.background = "rgba(5,10,20,.90)";

    }

    else {

        header.style.background = "rgba(0,0,0,.30)";

    }

});

// ------------------------------
// Footer Animation
// ------------------------------

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("footer div").forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    card.style.transition = "all .8s ease";

    observer.observe(card);

});

// ------------------------------
// Console Message
// ------------------------------

console.log("🔥 Forest Fire Prediction Dashboard Loaded Successfully");
/* ===============================
   FIRE RISK PROGRESS
================================ */

const fill = document.getElementById("progressFill");

if(fill){

    const risk = fill.dataset.risk;

    let width = 0;

    if(risk==="LOW") width=25;

    if(risk==="MODERATE") width=50;

    if(risk==="HIGH") width=75;

    if(risk==="EXTREME") width=100;

    setTimeout(()=>{

        fill.style.width=width+"%";

    },500);

}
// ================================
// Fade In Cards
// ================================

window.addEventListener("load",()=>{

    document.querySelectorAll(".form-card,.result-card").forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition="all .8s";

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        },300);

    });

});
/*==============================
      FIRE PARTICLES
===============================*/

const container = document.querySelector(".particles");

for(let i=0;i<40;i++){

    const particle=document.createElement("span");

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=
    (5+Math.random()*10)+"s";

    particle.style.animationDelay=
    Math.random()*6+"s";

    particle.style.opacity=Math.random();

    particle.style.width=
    particle.style.height=
    (4+Math.random()*8)+"px";

    container.appendChild(particle);

}