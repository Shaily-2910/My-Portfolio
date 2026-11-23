
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
    }

    const recipient = "shailykumari128@gmail.com";

    const subject = encodeURIComponent("Portfolio Contact Form");
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    status.textContent =
        "Opening your email application...";

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;
});
