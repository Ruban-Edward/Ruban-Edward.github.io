'use strict';



// element toggle function
const elementToggleFunc = function(elem) {
    elem.classList.toggle("active");
}



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() {
    elementToggleFunc(sidebar);
});



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function() {

        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();

    });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function() {
    elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function(selectedValue) {

    for (let i = 0; i < filterItems.length; i++) {

        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }

    }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function() {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function() {

        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }

    });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function() {

        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }

    });
}

/**
 * Calculation of experinece
 */

function calculateDuration(start, end) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Parse the start date
    let [startMonth, startYear] = start.split(" ");
    startMonth = months.indexOf(startMonth);
    startYear = parseInt(startYear);

    // If 'Present' is given for the end date, use the current date
    let endMonth, endYear;
    if (end === "Present") {
        const today = new Date();
        endMonth = today.getMonth();
        endYear = today.getFullYear();
    }

    // Calculate total months difference
    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    // Convert to years and months
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    // Generate the result string
    let result = `${start} — ${end} `;
    if (years == 1 && remainingMonths == 1) {
        result += ` (${years} year and ${remainingMonths} month)`;
    } else if (years > 1 && remainingMonths == 1) {
        result += ` (${years} years and ${remainingMonths} month)`;
    } else if (years > 1 && remainingMonths > 1) {
        result += ` (${years} years and ${remainingMonths} months)`;
    } else if (remainingMonths > 1) {
        result += ` (${totalMonths} months)`;
    } else {
        result += ` (${totalMonths} month)`;
    }

    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the content from the span tags directly
    const engineerText = document.getElementById("presentDuration").innerText;

    // Split the text to extract the start and end date
    const [engineerStart, engineerEnd] = engineerText.split(" — ");

    // Calculate and display duration for "Software Engineer"
    const engineerResult = calculateDuration(engineerStart, engineerEnd);
    document.getElementById("presentDuration").innerText = engineerResult;
});

document.querySelector('.carousel').addEventListener('mouseenter', function() {
    document.querySelector('.carousel-track').style.animationPlayState = 'paused';
});

document.querySelector('.carousel').addEventListener('mouseleave', function() {
    document.querySelector('.carousel-track').style.animationPlayState = 'running';
});