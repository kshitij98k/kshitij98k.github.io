// Linear Interpolation Scroll Implementaion.
function SmoothScroll()
{

const body = document.body,
      scrollWrap = document.querySelector("[data-scroll]"),
      height = scrollWrap.getBoundingClientRect().height - 1,
      speed = 0.08;

let offset = 0;
body.style.height = Math.floor(height) + "px";

function styles()
{
    // body.style.overflow = "hidden";
    body.style.width = "100%";
    scrollWrap.style.overflow = "hidden";
    scrollWrap.style.zIndex = 2;
    scrollWrap.style.position = "fixed";
    scrollWrap.style.top = scrollWrap.style.left = 0;
    scrollWrap.style.width = "100%";
}

function lerpScroll()
{
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;
    window.requestAnimationFrame(lerpScroll);

    styles();

} lerpScroll();

} SmoothScroll();