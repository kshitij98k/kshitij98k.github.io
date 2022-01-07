var router = new PJaxRouter({
    container: document.querySelector(".pjax-container"), // container where datas will be striped/appended
    cancelNavigationClass: "out", // links with that class does not trigger PJAX navigation
    cacheLinks: ".important-pages", // cache pages for all the links that have the ".important-pages" class on init and after each successful navigation
    cacheNavigatedPages: true, // add the current page to the cache after each successful navigation
    cacheLength: 30, // set the cache size to 15 entries
    
    onStart: {
        value: function(currentPage, nextPage) {
            // console.log("navigation has started, do your hiding animations and stuff. Going from/to:", currentPage, nextPage);
            leaveAnimation();
        },
    },
    onLeaving: {
        duration: 1250,
        value: function(currentPage, nextPage) {
            // console.log("1.25s has been ellapsed since navigation started, time to remove event listeners and stuff before the content will be removed. Going from/to:", currentPage, nextPage);
        },
    },
    onWaiting: {
        value: function(currentPage, nextPage) {
            // console.log("data are late... maybe you could display a loader?. Going from/to:", currentPage, nextPage);
        },
    },
    onError: {
        value: function(currentPage, nextPage) {
            // console.log("there has been an error while trying to retrieve the data and the navigation has been cancelled. Going from/to:", currentPage, nextPage);
        },
    },
    onReady: {
        value: function(prevPage, currentPage) {
            // console.log("new data have been successfully appended, do you showing animations and register your new event listeners. Successful transition from/to:", prevPage, currentPage);
            SmoothScroll();
            enterAnimation();
            Cursor();

            if (currentPage == 'works.html') {
                console.log('works page is loaded');
                gsap.to(".works", {skewX: -10, color: "#519259"});
                gsap.to(".kshitij", {skewX: 0, color: "black"});

                let i1 = document.querySelector(".i1");
                let i2 = document.querySelector(".i2");

                i1.addEventListener('click', ()=> {
                    alert("Sorry, Care app is still under development.");
                })
                i2.addEventListener('click', ()=> {
                    window.open("https://kumarkshitij98.github.io/glfx/","_blank");
                })
            }
            else if (currentPage == 'index.html') {
                console.log('index page is loaded');
                gsap.to(".kshitij", {skewX: -10, color: "#519259"});
                gsap.to(".works", {skewX: 0, color: "black"});
            }
        },
    },
});

window.addEventListener('load', ()=> {
    gsap.to(document.body, 1.5, {opacity: 1});
})


function leaveAnimation()
{
    gsap.to(".curtain_1", 1.2, {width: "100%", ease: "power4.inOut"});
    gsap.to(".curtain_2", 1.2, {width: "100%", ease: "power4.inOut", delay: .1});
    gsap.to(".curtain_3", 1.2, {width: "100%", ease: "power4.inOut", delay: .2});
}

function enterAnimation()
{
    gsap.to(".curtain_1", 1.2, {width: "0%", ease: "power4.inOut", delay: 1});
    gsap.to(".curtain_2", 1.2, {width: "0%", ease: "power4.inOut", delay: 1.1});
    gsap.to(".curtain_3", 1.2, {width: "0%", ease: "power4.inOut", delay: 1.2});
}



function Interact()
{
    let kshitij = document.querySelector(".kshitij");
    let works = document.querySelector(".works");
    let contact = document.querySelector(".contact");
    let github = document.querySelector(".github");
    let linkedin = document.querySelector(".linkedin");
    let dribbble = document.querySelector(".dribbble");

    kshitij.addEventListener('mouseover', ()=> {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
    })
    works.addEventListener('mouseover', ()=> {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
    })
    contact.addEventListener('mouseover', ()=> {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
    })
    github.addEventListener('mouseover', ()=> {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
        github.style.cursor = "pointer";
    })
    linkedin.addEventListener('mouseover', ()=> {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
        linkedin.style.cursor = "pointer";
    })
    dribbble.addEventListener('mouseover', ()=> {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
        dribbble.style.cursor = "pointer";
    })

    kshitij.addEventListener('mouseout', ()=> {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    })
    works.addEventListener('mouseout', ()=> {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    })
    contact.addEventListener('mouseout', ()=> {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    })
    github.addEventListener('mouseout', ()=> {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    })
    linkedin.addEventListener('mouseout', ()=> {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    })
    dribbble.addEventListener('mouseout', ()=> {
        document.querySelector(".cursor__circle").style.width = "1vw";
        document.querySelector(".cursor__circle").style.height = "1vw";
        document.querySelector(".cursor__circle").style.background = "black";
        document.querySelector(".cursor__circle").style.border = "none";
        document.querySelector(".cursor__circle").style.opacity = 1;
        document.querySelector("#cursor").style.margin = "-.7vw";
    })
    github.addEventListener('click', ()=> {
        window.open("https://github.com/kumarkshitij98","_blank");
    })
    linkedin.addEventListener('click', ()=> {
        window.open("https://www.linkedin.com/in/kumar-kshitij-699203201/","_blank");
    })
    dribbble.addEventListener('click', ()=> {
        window.open("https://dribbble.com/kshitij98k","_blank");
    })
    
} Interact();

function preventBack() { window.history.forward(); }  
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };

    window.onbeforeunload = function() { return "Your work will be lost."; };