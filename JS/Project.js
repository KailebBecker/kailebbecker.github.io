const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".zoomable");
const closeBtn = document.querySelector(".lightbox-close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});