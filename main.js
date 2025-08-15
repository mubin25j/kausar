// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
});

// Optional: contact form alert
const form = document.querySelector("form");
if(form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Message sent! (Demo only)");
    });
}
