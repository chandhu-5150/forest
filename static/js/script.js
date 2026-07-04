// ======================================
// FWI Prediction UI Script
// ======================================

// Page Loading Animation
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

// Button Click Animation
const button = document.querySelector(".predict-btn");

if (button) {

    button.addEventListener("click", function () {

        button.innerHTML = "Predicting...";

        button.style.opacity = "0.8";

    });

}

// Input Focus Animation
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {

    input.addEventListener("focus", () => {

        input.style.boxShadow =
            "0 0 15px rgba(255,107,0,0.7)";

    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "none";

    });

});

// Fade-in Animation
const card = document.querySelector(".glass-card");

if (card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "all 0.8s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0px)";

    }, 300);

}

// Input Validation
document.querySelector("form").addEventListener("submit", function(e){

    const fields=document.querySelectorAll("input");

    let valid=true;

    fields.forEach(field=>{

        if(field.value.trim()===""){

            valid=false;

            field.style.border="2px solid red";

        }
        else{

            field.style.border="none";

        }

    });

    if(!valid){

        alert("Please fill all fields.");

        e.preventDefault();

    }

});