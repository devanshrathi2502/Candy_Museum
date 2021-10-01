window.onscroll = function () { scrollFunction() };
let nav = document.querySelector("#mainNavbar");
// let logo=document.querySelector(".name");
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.backgroundColor = "rgb(222,192,222)";
        nav.style.transition = "all 0.5s"
        // logo.textContent="";
        // nav.style.color = "black";
        // document.getElementsByTagName("P").style.color="black";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }
}