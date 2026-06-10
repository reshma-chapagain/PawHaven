function filterPets(type) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let petType = card.getAttribute("data-type");

        if (type === "all" || petType === type) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});