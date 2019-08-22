const controlYPos = 10;
const liHeight = 50;

let tick = true;

window.onload = function() {
    console.log("window loaded");
    windowOnLoad();
    setNavTap();
};

function windowOnLoad() {
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

function setNavTap() {

    let nav = document.querySelector("nav");
    let ul = document.getElementById("navigation");
    
    let onTap = function() {
        console.log("got a tap!");
        if(!ul.classList.contains("show")) {
            ul.classList.add("show");
            ul.classList.remove("hide");
            nav.classList.add("tapped");
        } else {
            ul.classList.add("hide");
            ul.classList.remove("show");
            nav.classList.remove("tapped");
        }
    }

    nav.addEventListener("touchstart", onTap);
}