/* ==========================================================
   SHAILY KUMARI - PORTFOLIO SCRIPT
   ========================================================== */

(function () {
    "use strict";

    // Enables scroll-reveal styles only when JavaScript is running
    document.documentElement.classList.add("js");

    // Email that receives messages from the contact form
    const CONTACT_RECIPIENT = "shailykumari128@gmail.com";

    // ---------- ELEMENTS ----------
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const backToTop = document.getElementById("back-to-top");
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    const yearEl = document.getElementById("year");

    // ---------- TOAST ----------
    let toastEl = null;
    let toastTimer = null;

    function showToast(message) {
        if (!toastEl) {
            toastEl = document.createElement("div");
            toastEl.className = "toast";
            toastEl.setAttribute("role", "status");
            document.body.appendChild(toastEl);
        }
        toastEl.textContent = message;
        // force reflow so the transition restarts on repeated clicks
        void toastEl.offsetWidth;
        toastEl.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toastEl.classList.remove("show");
        }, 2800);
    }

    // ---------- THEME (DARK / LIGHT) ----------
    const THEME_KEY = "portfolio-theme";
    const themeToggle = document.getElementById("theme-toggle");
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);

        if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0b1020" : "#f6f7fb");

        if (themeToggle) {
            const isDark = theme === "dark";
            themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
            themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
            const icon = themeToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-moon", !isDark);
                icon.classList.toggle("fa-sun", isDark);
            }
        }
    }

    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
            applyTheme(next);
            try {
                localStorage.setItem(THEME_KEY, next);
            } catch (e) {
                /* storage unavailable - theme still changes for this visit */
            }
        });
    }

    // ---------- MOBILE NAVIGATION ----------
    function setMenu(open) {
        if (!menuToggle || !navMenu) return;
        navMenu.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars", !open);
            icon.classList.toggle("fa-xmark", open);
        }
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            setMenu(!navMenu.classList.contains("open"));
        });

        // Close menu after choosing a link
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                setMenu(false);
            });
        });

        // Close when clicking outside the menu
        document.addEventListener("click", function (event) {
            if (
                navMenu.classList.contains("open") &&
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                setMenu(false);
            }
        });

        // Close with Escape key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") setMenu(false);
        });

        // Reset when resizing to desktop
        window.addEventListener("resize", function () {
            if (window.innerWidth > 1024) setMenu(false);
        });
    }

    // ---------- HEADER SHADOW & BACK-TO-TOP ----------
    function onScroll() {
        const y = window.scrollY || window.pageYOffset;

        if (header) header.classList.toggle("scrolled", y > 10);
        if (backToTop) backToTop.classList.toggle("show", y > 500);

        // Highlight Contact when the page is scrolled to the very bottom
        const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
        if (atBottom) setActiveLink("contact");
    }

    let ticking = false;
    window.addEventListener(
        "scroll",
        function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        },
        { passive: true }
    );

    // ---------- ACTIVE NAV LINK ON SCROLL ----------
    function setActiveLink(id) {
        navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
        });
    }

    const sections = document.querySelectorAll("main section[id]");

    if ("IntersectionObserver" in window && sections.length) {
        const sectionObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) setActiveLink(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );
        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

    // ---------- SCROLL REVEAL ANIMATIONS ----------
    const revealSelectors = [
        ".section-heading",
        ".about-image",
        ".about-content",
        ".skill-card",
        ".project-card",
        ".timeline-item",
        ".resume-box",
        ".contact-info",
        ".contact-form"
    ].join(",");

    const revealItems = document.querySelectorAll(revealSelectors);

    revealItems.forEach(function (el) {
        el.classList.add("reveal");

        // Stagger siblings inside the same grid/list
        const siblings = el.parentElement
            ? Array.prototype.filter.call(el.parentElement.children, function (child) {
                  return child.classList.contains("reveal") || child.matches(revealSelectors);
              })
            : [];
        const index = siblings.indexOf(el);
        el.style.setProperty("--delay", Math.max(index, 0) * 90 + "ms");
    });

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        revealItems.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        revealItems.forEach(function (el) {
            el.classList.add("visible");
        });
    }

    // ---------- PLACEHOLDER LINKS ----------
    // Links still set to YOUR_... placeholders show a friendly message instead of breaking
    document.addEventListener("click", function (event) {
        const link = event.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href") || "";
        if (/^(mailto:)?YOUR_/i.test(href)) {
            event.preventDefault();
            showToast("This link hasn't been added yet.");
        }
    });

    // ---------- FOOTER YEAR ----------
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---------- CONTACT FORM ----------
    function setStatus(message, type) {
        if (!formStatus) return;
        formStatus.textContent = message;
        formStatus.className = "form-status" + (type ? " " + type : "");
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (contactForm) {
        const fields = contactForm.querySelectorAll("input, textarea");

        // Clear error highlight while typing
        fields.forEach(function (field) {
            field.addEventListener("input", function () {
                field.classList.remove("invalid");
                if (formStatus && formStatus.classList.contains("error")) setStatus("", "");
            });
        });

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const subjectField = document.getElementById("subject");
            const messageField = document.getElementById("message");

            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const subject = subjectField.value.trim();
            const message = messageField.value.trim();

            fields.forEach(function (field) {
                field.classList.remove("invalid");
            });

            // Required fields
            const missing = [nameField, emailField, subjectField, messageField].filter(function (field) {
                return !field.value.trim();
            });

            if (missing.length) {
                missing.forEach(function (field) {
                    field.classList.add("invalid");
                });
                missing[0].focus();
                setStatus("Please fill in all fields.", "error");
                return;
            }

            // Email format
            if (!isValidEmail(email)) {
                emailField.classList.add("invalid");
                emailField.focus();
                setStatus("Please enter a valid email address.", "error");
                return;
            }

            const mailSubject = encodeURIComponent(subject || "Portfolio Contact Form");
            const mailBody = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            setStatus("Opening your email application...", "success");

            window.location.href =
                "mailto:" + CONTACT_RECIPIENT + "?subject=" + mailSubject + "&body=" + mailBody;

            // Reset the form shortly after handing over to the email app
            setTimeout(function () {
                contactForm.reset();
                setStatus("Thanks! Please press send in your email app to deliver your message.", "success");
            }, 1200);
        });
    }

    // Initial state
    onScroll();
})();
