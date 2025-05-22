var overlay = document.getElementById("myOverlay");
    var navButton = document.getElementById("iconb");
    var closeButton = document.getElementById("close-button");

    navButton.addEventListener("click", openNav);
    closeButton.addEventListener("click", closeNav);

    function openNav() {
        overlay.classList.add("open");
    }

    function closeNav() {
        overlay.classList.remove("open");
    }

    document.querySelectorAll(".overlay > ul > li > a").forEach(function (link) {
        link.addEventListener("click", function () {
            closeNav();
        });
    });

    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 600) {
            overlay.classList.remove("open");
        }
    });