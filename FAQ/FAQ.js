const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach((t) => {
    t.addEventListener("click", () => {
        t.parentNode.classList.toggle("active");
    });
});