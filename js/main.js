var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-desktop").style.top = "0";
    } else {
        document.getElementById("navbar-desktop").style.top = "-13%";
    }
    prevScrollpos = currentScrollPos
}