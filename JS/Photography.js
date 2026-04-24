const sections = document.querySelectorAll(".scroll-section");
let current = 0;
let isScrolling = false;

// set initial state
sections[current].classList.add("active");

function scrollToSection(direction) {
    if (isScrolling) return;

    isScrolling = true;

    sections[current].classList.remove("active");

    if (direction === "down") {
        sections[current].classList.add("prev");
        current = Math.min(current + 1, sections.length - 1);
    } else {
        current = Math.max(current - 1, 0);
    }

    sections[current].classList.remove("prev");
    sections[current].classList.add("active");

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}

window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        scrollToSection("down");
    } else {
        scrollToSection("up");
    }
   
const links = document.querySelectorAll(".scroll-section a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const href = this.getAttribute("href");
        const section = this.closest(".scroll-section");

        section.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});
});