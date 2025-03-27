// Navbar scroll behavior
document.addEventListener("scroll", function () {
    let menu = document.getElementById("navbar");
    let scrollPosition = window.scrollY;
    let screenWidth = window.innerWidth;
    let topValue = screenWidth < 700 ? "15vh" : screenWidth < 1300 ? "17.5vh" : "25vh";

    if (scrollPosition >= window.innerHeight * 0.25) {
        menu.style.position = "fixed";
        menu.style.top = "0";
    } else {
        menu.style.position = "absolute";
        menu.style.top = topValue;
    }
});
// Easter Egg logic
const easterEggIcon = document.getElementById('EasterEgg');
easterEggIcon.addEventListener('click', function (e) {
    if (window.scrollY === 0) {
        e.preventDefault(); // Stop anchor jump only when at top
        const squidward = document.getElementById('squidward');
        squidward.style.display = 'block';
        setTimeout(() => {
            squidward.style.display = 'none';
        }, 5000); // Hide after 5 seconds
    }
    // If scrollY > 0, do nothing extra—let the <a href="#back-to-top"> work naturally
});
