let tick = true;

window.onload = function() {
    let header = document.querySelector("header");
    let nav = document.querySelector("header nav");

    let moveHeader = function(pos) {
        header.style.top = pos;
        if(pos == 0 && nav.classList.contains("scrolled")) {
            nav.classList.remove("scrolled");
            nav.classList.add("unscrolled");
        } else if(!nav.classList.contains("scrolled")) {
            nav.classList.add("scrolled");
            nav.classList.remove("unscrolled");
        }
    }

    window.addEventListener("scroll", function() {
        let yPos = window.scrollY;
        if(tick) {
            window.requestAnimationFrame(function() {
                moveHeader(yPos);
                tick = true;
            });
        }

        tick = false;
    });
}