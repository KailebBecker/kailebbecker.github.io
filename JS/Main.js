// future shared features (menu toggle, etc.)
console.log("Main JS loaded");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

// close menu when clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.onclick = () => {
        navbar.classList.remove("active");
    };
});
