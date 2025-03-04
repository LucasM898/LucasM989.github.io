document.addEventListener("scroll", function () {
    let menu = document.getElementById("navbar");
    let scrollPosition = window.scrollY;
    let screenWidth = window.innerWidth; 
    let topValue = screenWidth < 700 ? "10vh" : screenWidth < 1300 ? "17.5vh" : "25vh";

    if (scrollPosition >= window.innerHeight * 0.25) { 
        menu.style.position = "fixed";
        menu.style.top = "0";
    } else {
        menu.style.position = "absolute";
        menu.style.top = topValue;
    }
});
