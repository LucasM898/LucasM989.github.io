document.addEventListener("scroll", function () {
    let menu = document.getElementById("menu-selectors");
    let scrollPosition = window.scrollY;

    if (scrollPosition >= window.innerHeight * 0.25) { 
        menu.style.position = "fixed";
        menu.style.top = "0";
    } else {
        menu.style.position = "absolute";
        menu.style.top = "25vh";
    }
});
