/* ══════════════════════════════════════════════
   LOAD PETS FROM JSON AND RENDER CARDS
══════════════════════════════════════════════ */
async function loadPets() {
    const grid = document.getElementById('galleryGrid');

    try {
        const response = await fetch('pets.json');
        const pets = await response.json();

        pets.forEach(pet => grid.appendChild(createCard(pet)));
    } catch (error) {
        console.log('Failed to load pets.json:', error);
        grid.innerHTML = `<p class="img-error">Failed to load pets. Please try again later.</p>`;
    }

    attachCardClickHandlers();
}

function createCard(pet) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.type = pet.type;

    card.innerHTML = `
        <div class="card-img-wrap">
            <img src="${pet.image}" alt="${pet.name}">
        </div>
        <h3>${pet.name}</h3>
        <p class="card-meta">${pet.name} is ${pet.age} old and a ${pet.type}</p>
        <div class="pet-info">
            <ul>
                <li><strong>Name</strong> is ${pet.name}</li>
                <li><strong>Age</strong> is ${pet.age}</li>
                <li><strong>Type</strong> is ${pet.type}</li>
                <li><strong>Info</strong>. ${pet.info}</li>
            </ul>
            <a href="contact.html" class="adopt-btn">Adopt ${pet.name} now</a>
        </div>
    `;

    return card;
}

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
   + kicks off the JSON pet load
══════════════════════════════════════════════ */
$(document).ready(function () {

    let images = $("#petSlider img");

    if (images.length > 0) {
        let current = 0;

        images.hide();
        images.eq(current).show();

        setInterval(function () {
            images.eq(current).fadeOut(500);
            current = (current + 1) % images.length;
            images.eq(current).fadeIn(500);
        }, 3000);

        window.changeSlide = function (n) {
            images.eq(current).fadeOut(500);
            current = (current + n + images.length) % images.length;
            images.eq(current).fadeIn(500);
        };
    } else {
        console.log("No images found in #petSlider");
    }

    loadPets();
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
   (attached after cards are rendered from JSON)
══════════════════════════════════════════════ */
function attachCardClickHandlers() {
    document.querySelectorAll(".card").forEach(function (card) {
        card.addEventListener("click", function (e) {

            if (e.target.classList.contains("adopt-btn")) return;

            document.querySelectorAll(".pet-info").forEach(function (info) {
                if (info !== card.querySelector(".pet-info")) {
                    info.classList.remove("show");
                }
            });

            card.querySelector(".pet-info").classList.toggle("show");
        });
    });
}
