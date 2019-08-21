let tick = true;
const controlYPos = 10;

window.onload = windowOnLoad;

function windowOnLoad() {
    console.log("window loaded");
    let header = document.querySelector("header");

    let changeBackground = function(posY) {
        if(posY > controlYPos && !header.classList.contains("scrolled")) {
            header.classList.add("scrolled");
            header.classList.remove("unscrolled");
        } else if(posY <= controlYPos && header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
            header.classList.add("unscrolled");
        }
    }

    window.addEventListener("scroll", function() {

        let posY = window.scrollY;

        if(tick) {
            window.requestAnimationFrame(function() {
                changeBackground(posY);
                tick = true;
            });
        }

        tick = false;
    });
}