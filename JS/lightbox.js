const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

// open lightbox
document.querySelectorAll(".photo-item, .zoomable").forEach(item => {
    item.addEventListener("click", () => {
        const img = item.tagName === "IMG" ? item : item.querySelector("img");

        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

// close button
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// click outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});
