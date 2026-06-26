'use strict';

// Unified element class toggle helper function
const elementToggleFunc = function (elem) {
    if (elem) elem.classList.toggle("active");
}

// Sidebar responsive layout dynamic toggle handling strategy for mobile viewport metrics
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function () {
        elementToggleFunc(sidebar);
    });
}

// Achievements Modal Window Display Controller
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}

if (testimonialsItem.length > 0) {
    for (let i = 0; i < testimonialsItem.length; i++) {
        testimonialsItem[i].addEventListener("click", function () {
            if (modalTitle && modalText) {
                modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
                modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
                testimonialsModalFunc();
            }
        });
    }
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// Advanced Filter Pipeline System logic for Portfolio items
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
            filterItems[i].classList.add("active");
        } else {
            filterItems[i].classList.remove("active");
        }
    }
}

let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        filterFunc(selectedValue);
        if (lastClickedBtn) lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}

// Contact Form Frontend Validation handler
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length > 0 && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener("input", function () {
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            } else {
                formBtn.setAttribute("disabled", "");
            }
        });
    }
}

// Tabbed Floating Navigation Controller Engine
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navigationLinks.length > 0 && pages.length > 0) {
    for (let i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener("click", function () {
            const targetPage = this.innerText.toLowerCase();
            for (let j = 0; j < pages.length; j++) {
                if (targetPage === pages[j].dataset.page) {
                    pages[j].classList.add("active");
                    navigationLinks[j].classList.add("active");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    pages[j].classList.remove("active");
                    navigationLinks[j].classList.remove("active");
                }
            }
        });
    }
}

// Professional Development Experience Continuous Dynamic Calculations Engine
function calculateDuration(start, end) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let [startMonth, startYear] = start.split(" ");
    startMonth = months.indexOf(startMonth);
    startYear = parseInt(startYear);

    let endMonth, endYear;
    if (end === "Present") {
        const today = new Date();
        endMonth = today.getMonth();
        endYear = today.getFullYear();
    } else {
        let [eMonth, eYear] = end.split(" ");
        endMonth = months.indexOf(eMonth);
        endYear = parseInt(eYear);
    }

    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    let result = `${start} — ${end} `;
    if (years >= 1) {
        result += `(${years} yr${years > 1 ? 's' : ''} ${remainingMonths > 0 ? remainingMonths + ' mo' + (remainingMonths > 1 ? 's' : '') : ''})`;
    } else {
        result += `(${totalMonths} mos)`;
    }
    return result;
}

// High Performance Statistics Auto-Counter Engine Module
const animateCounters = function () {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 20; // Lower numbers equal faster interpolation speeds
        const updateCount = () => {
            const increment = Math.ceil(target / speed);
            if (count < target) {
                count += increment;
                if (count > target) count = target;
                counter.innerText = count + "+";
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
}

// Integrated Engineering Typography Hero Section Typing Text Functionality Effect
const runTypingEffect = function () {
    const words = ["Software Engineer", "Web Developer", "Problem Solver"];
    let i = 0;
    let timer;
    const typingElement = document.querySelector('.typing-text');

    if (!typingElement) return;

    function typing() {
        let word = words[i].split("");
        var loopTyping = function () {
            if (word.length > 0) {
                typingElement.innerHTML += word.shift();
            } else {
                setTimeout(deleting, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deleting() {
        let word = words[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                typingElement.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typing, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 60);
        };
        loopDeleting();
    }
    typing();
}

// Global DOM Content Synchronization Init Loop Engine
document.addEventListener('DOMContentLoaded', function () {
    const presentDurationEl = document.getElementById("presentDuration");
    if (presentDurationEl) {
        const engineerText = presentDurationEl.innerText;
        const [engineerStart, engineerEnd] = engineerText.split(" — ");
        const engineerResult = calculateDuration(engineerStart.trim(), engineerEnd.trim());
        presentDurationEl.innerText = engineerResult;
    }

    // Initialize Typing Showcase Effect
    runTypingEffect();

    // Kill loading overlay once execution performance completes frames rendering
    const loaderScreen = document.getElementById('loading-screen');
    if (loaderScreen) {
        setTimeout(() => {
            loaderScreen.style.opacity = '0';
            loaderScreen.style.visibility = 'hidden';
            // Start counter animations right after loader exits view screen
            animateCounters();
        }, 600);
    }
});