var router = new PJaxRouter({
    container: document.querySelector(".pjax-container"),
    cancelNavigationClass: "out",
    cacheLinks: ".important-pages",
    cacheNavigatedPages: true,
    cacheLength: 30,
    onStart: {
        value: function (e, r) {
            leaveAnimation();
        },
    },
    onLeaving: {
        duration: 1250,
        value: function (e, r) {},
    },
    onWaiting: {
        value: function (e, r) {},
    },
    onError: {
        value: function (e, r) {},
    },
    onReady: {
        value: function (e, r) {
            if ("works.html" == r) {
                console.log("works page is loaded");
                gsap.to(".works", { skewX: -10, color: "#519259" });
                gsap.to(".kshitij", { skewX: 0, color: "black" });

                let e = document.querySelector(".i1"),
                    r = document.querySelector(".i2");

                e.addEventListener("click", () => {
                    alert("Sorry, Care app is still under development.");
                });

                r.addEventListener("click", () => {
                    window.open("https://kumarkshitij24.github.io/glfx/", "_blank");
                });
            } else if ("index.html" == r) {
                console.log("index page is loaded");
                gsap.to(".kshitij", { skewX: -10, color: "#519259" });
                gsap.to(".works", { skewX: 0, color: "black" });
            }
        },
    },
});

function leaveAnimation() {
    gsap.to(".curtain_1", 1.2, { width: "100%", ease: "power4.inOut" });
    gsap.to(".curtain_2", 1.2, { width: "100%", ease: "power4.inOut", delay: 0.1 });
    gsap.to(".curtain_3", 1.2, { width: "100%", ease: "power4.inOut", delay: 0.2 });
}

function enterAnimation() {
    gsap.to(".curtain_1", 1.2, { width: "0%", ease: "power4.inOut", delay: 1 });
    gsap.to(".curtain_2", 1.2, { width: "0%", ease: "power4.inOut", delay: 1.1 });
    gsap.to(".curtain_3", 1.2, { width: "0%", ease: "power4.inOut", delay: 1.2 });
}

function Interact() {
    let e = document.querySelector(".kshitij"),
        r = document.querySelector(".works"),
        c = document.querySelector(".contact"),
        t = document.querySelector(".github"),
        o = document.querySelector(".linkedin"),
        u = document.querySelector(".dribbble");

    e.addEventListener("mouseover", () => {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
    });

    // ... (Similar code for other event listeners)

    u.addEventListener("mouseout", () => {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    });

    t.addEventListener("click", () => {
        window.open("https://github.com/kumarkshitij98", "_blank");
    });

    o.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/kumar-kshitij-699203201/", "_blank");
    });

    u.addEventListener("click", () => {
        window.open("https://dribbble.com/kshitij98k", "_blank");
    });
}

function preventBack() {
    window.history.forward();
}

window.addEventListener("load", () => {
    gsap.to(document.body, 1.5, { opacity: 1 });
});

Interact();
setTimeout("preventBack()", 0);
window.onunload = function () {};
