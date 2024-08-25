function openMenu() {
    document.getElementById("menu").classList.toggle("close-menu")
    document.getElementById("m-navbar").classList.toggle("open-mobile-nav")
    var elm = document.getElementsByClassName("first-section");
    for (let i = 0; i < elm.length; i++) {
        elm[i].classList.toggle("opacity");
    }
}