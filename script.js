/* ==========================
   CAspire AI Theme Manager
   ========================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("caspire-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeToggle.checked = true;

    }

    // Toggle theme
    themeToggle.addEventListener("change", () => {

        if (themeToggle.checked) {

            document.body.classList.add("dark");

            localStorage.setItem("caspire-theme", "dark");

        } else {

            document.body.classList.remove("dark");

            localStorage.setItem("caspire-theme", "light");

        }

    });

});