const captions = document.querySelectorAll(".typewriter");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, {
    threshold: 0.5
});

captions.forEach(caption => {
    observer.observe(caption);
});