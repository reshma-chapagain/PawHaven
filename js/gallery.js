/* ── SLIDER ─────────────────────────────────── */
$(function () {
    var totalSlides = $(".slider-card").length;

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
});

/* ── FILTER ─────────────────────────────────── */
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

/* ── DETAIL PANEL ───────────────────────────── */
document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function (e) {
        // Don't toggle if clicking the Adopt Now link
        if (e.target.classList.contains("adopt-btn")) return;
        card.querySelector(".pet-info").classList.toggle("show");
    });
});

let currentSlide = 0;

let slides = document.querySelectorAll(".slide");


function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });


    if(index >= slides.length){
        currentSlide = 0;
    }

    if(index < 0){
        currentSlide = slides.length-1;
    }


    slides[currentSlide].classList.add("active");

}



function changeSlide(n){

    currentSlide += n;

    showSlide(currentSlide);

}



setInterval(()=>{
    currentSlide++;
    showSlide(currentSlide);
},3000);