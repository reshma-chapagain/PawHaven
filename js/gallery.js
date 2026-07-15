/* ══════════════════════════════════════════════
   JQUERY UI FEATURED PETS SLIDER
══════════════════════════════════════════════ */
$(function () {
    var totalSlides = $(".slider-card").length;

    if (totalSlides > 0) {
        $("#slide-0").addClass("active");

        $("#featured-slider").slider({
            min: 0,
            max: totalSlides - 1,
            step: 1,
            value: 0,
            slide: function (event, ui) {
                $(".slider-card").removeClass("active");
                $("#slide-" + ui.value).addClass("active");
            }
        });
    }
});

/* ══════════════════════════════════════════════
   IMAGE SLIDER (top banner with prev/next)
══════════════════════════════════════════════ */
$(document).ready(function () {

    let images = $("#petSlider img");

    if (images.length === 0) {
        console.log("No images found in #petSlider");
        return;
    }

    let current = 0;

    // Hide all, show first
    images.hide();
    images.eq(current).show();

    // Auto-advance every 3 seconds
    setInterval(function () {
        images.eq(current).fadeOut(500);
        current = (current + 1) % images.length;
        images.eq(current).fadeIn(500);
    }, 3000);

    // Prev / Next buttons
    window.changeSlide = function (n) {
        images.eq(current).fadeOut(500);
        current = (current + n + images.length) % images.length;
        images.eq(current).fadeIn(500);
    };

});

/* ══════════════════════════════════════════════
   FILTER BUTTONS
══════════════════════════════════════════════ */
function filterPets(type, btn) {
    document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.remove("active");
    });

    if (btn) btn.classList.add("active");

    document.querySelectorAll(".card").forEach(function (card) {
        if (type === "all" || card.dataset.type === type) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
            card.querySelector(".pet-info").classList.remove("show");
        }
    });
}

/* ══════════════════════════════════════════════
   DETAIL PANEL — click to open, one at a time
══════════════════════════════════════════════ */
document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function (e) {

        // Don't toggle when clicking Adopt button or close button
        if (e.target.classList.contains("adopt-btn")) return;
        if (e.target.classList.contains("close-btn")) {
            card.querySelector(".pet-info").classList.remove("show");
            return;
        }

        // Close all other open panels first
        document.querySelectorAll(".pet-info").forEach(function (info) {
            if (info !== card.querySelector(".pet-info")) {
                info.classList.remove("show");
            }
        });

        // Toggle this card's panel
        card.querySelector(".pet-info").classList.toggle("show");
    });
});