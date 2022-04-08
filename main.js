var typed = new Typed(".typing", {
    strings: ["Oct 24,22,9:00AM", "Oct 30,22,9:00AM", "Nov 2,22,9:00AM", "Nov 05,22,9:00AM", "Nov 11,22,9:00AM"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

window.addEventListener("scroll", function() {
        var nav = document.getElementById("nav");
        nav.classList.toggle("sticky", window.scrollY > 0)


    }

)

