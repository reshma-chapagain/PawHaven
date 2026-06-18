<<<<<<< Updated upstream
const DOG_API = 'https://dog.ceo/api/breeds/image/random/12';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=12';


const dogNames = ['Luna', 'Charlie', 'Max', 'Bella', 'Rocky', 'Molly', 'Bruno', 'Daisy', 'Toby', 'Sadie', 'Jack', 'Lucy'];
const catNames = ['Oliver', 'Coco', 'Nalu', 'Milo', 'Butter', 'Oreo', 'Simba', 'Lily', 'Leo', 'Mittens', 'Charlie', 'Sophie'];
const ages = ['2yrs', '1.2yrs', '6months', '3yrs', '1yr', '10mnths'];
=======
const DOG_API = 'https://dog.ceo/api/breeds/image/random/6';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=6';


const dogNames = ['Luna', 'Charlie', 'Max', 'Bella', 'Rocky', 'Molly'];
const catNames = ['Oliver', 'Coco', 'Nalu', 'Milo', 'Butter', 'Oreo'];
const ages = ['2yrs', '1.2yrs', '6months', '3yrs', '1yrs', '10mnths'];
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
        return data.message; //It returns array of 12 URLs.
=======


        return data.message;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        return data.map(cat => cat.url); //It returns array of 12 URLs.


       
=======


        return data.map(function (cat) {
            return cat.url;
        });
>>>>>>> Stashed changes
    }
    catch (error) {
        console.log('Failed to fetch cat images:', error);
        return [];
    }
}
<<<<<<< Updated upstream
function showSpinner(grid) {
    const spinner = document.createElement('div');
    spinner.className = "loading-spinner";
    spinner.id = grid.id + "-spinner";
    spinner.innerHTML = `
    <div class = "spinner"> </div>
    `;
    grid.parentElement.appendChild(spinner);
}

function hideSpinner(grid) {
    const spinner = document.getElementById(grid.id + '-spinner');
    if (spinner) 
        spinner.remove();
}

async function loadPets() {
=======

async function loadPets() {
    const dogImages = await fetchDogs();
    const catImages = await fetchCats();
>>>>>>> Stashed changes

    const featuredGrid = document.getElementById('featuredGrid');
    const lovelyGrid = document.getElementById('lovelyGrid');


<<<<<<< Updated upstream
    showSpinner(lovelyGrid);

    const [dogImages, catImages] = await Promise.all([fetchDogs(), fetchCats()]);

    hideSpinner(lovelyGrid);

    for (let i = 0; i < 6; i++) {
        if(dogImages[i]) {
            featuredGrid.appendChild(createCard(dogImages[i], getRandom(dogNames), getRandom(ages)));
        }
    }
    // For lovely Pets
    const lovelyPets = [];
    for (let i = 6; i < 12; i++) {
       if(dogImages[i]) {
        lovelyPets.push({ url : dogImages[i], name : getRandom(dogNames) });
       }
    }


    for (let i = 0; i < 12; i++) {
        if(catImages[i]) {
            lovelyPets.push({ url : catImages[i], name : getRandom(catNames) });
        }
    }

    for (let i = lovelyPets.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lovelyPets[i], lovelyPets[j]] = [lovelyPets[j], lovelyPets[i]];
    }

    lovelyPets.forEach(pet => {
        lovelyGrid.appendChild(createCard(pet.url, pet.name, getRandom(ages)));
    });
}


=======
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

>>>>>>> Stashed changes
loadPets();