const DOG_API = 'https://dog.ceo/api/breeds/image/random/6';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=6';


const dogNames = ['Luna', 'Charlie', 'Max', 'Bella', 'Rocky', 'Molly'];
const catNames = ['Oliver', 'Coco', 'Nalu', 'Milo', 'Butter', 'Oreo'];
const ages = ['2yrs', '1.2yrs', '6months', '3yrs', '1yrs', '10mnths'];


function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function createCard(imgUrl, name, age) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.innerHTML = `
        <img src = "${imgUrl}" alt = "${name}"/>
        <div class = "card-body">
        <div class = "card-name">${name}</div>
        <div class = "card-info">${age}</div>
        <a href = "contact.html" class = "card-btn"> Adopt Me</a>
        </div>
    `;

    return card;

}


async function fetchDogs() {
    try {
        const response = await fetch(DOG_API);
        const data = await response.json();


        return data.message;
    }

    catch (error) {
        console.log('Failed to fetch dog images:', error);
        return [];
    }

}

async function fetchCats() {
    try {
        const response = await fetch(CAT_API);
        const data = await response.json();


        return data.map(function (cat) {
            return cat.url;
        });
    }
    catch (error) {
        console.log('Failed to fetch cat images:', error);
        return [];
    }
}

async function loadPets() {
    const dogImages = await fetchDogs();
    const catImages = await fetchCats();

    const featuredGrid = document.getElementById('featuredGrid');
    const lovelyGrid = document.getElementById('lovelyGrid');


    for (let i = 0; i < 6; i++) {
        const card = createCard(dogImages[i], getRandom(dogNames), getRandom(ages), 'Dog');
        featuredGrid.appendChild(card);
    }

    for (let i = 0; i < 6; i++) {
        const card = createCard(catImages[i], getRandom(catNames), getRandom(ages), 'Cat');
        lovelyGrid.appendChild(card);
    }

    // For lovely Pets

    for (let i = 6; i < 12; i++) {
        const card = createCard(dogImages[i], getRandom(dogNames), getRandom(ages), 'Dog');
        lovelyGrid.appenedChild(card);
    }


    for (let i = 6; i < 12; i++) {
        const card = creareCard(catImages[i], getRandom(dogNames), getRandom(ages), 'Cat');
        lovelyGrid.appendChild(card);
    }

}

loadPets();