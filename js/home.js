const DOG_API = 'https://dog.ceo/api/breeds/image/random/12';
const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=12';


const dogNames = ['Luna', 'Charlie', 'Max', 'Bella', 'Rocky', 'Molly', 'Bruno', 'Daisy', 'Toby', 'Sadie', 'Jack', 'Lucy'];
const catNames = ['Oliver', 'Coco', 'Nalu', 'Milo', 'Butter', 'Oreo', 'Simba', 'Lily', 'Leo', 'Mittens', 'Charlie', 'Sophie'];
const ages = ['2yrs', '1.2yrs', '6months', '3yrs', '1yr', '10mnths'];

const Fallback_Dogs = [
    'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
    'https://images.dog.ceo/breeds/terrier-cairn/n02096177_1123.jpg',
    'https://images.dog.ceo/breeds/dingo/n02115641_1674.jpg',
    'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_2574.jpg',
    'https://images.dog.ceo/breeds/rajapalayam-indian/Rajapalayam-dog.jpg',
    'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_1157.jpg'
];

const Fallback_Cat = [ 
    'https://cdn2.thecatapi.com/images/181.jpg',
    'https://cdn2.thecatapi.com/images/1u3.jpg',
    'https://cdn2.thecatapi.com/images/9ao.jpg',
    'https://cdn2.thecatapi.com/images/b4j.jpg',
    'https://cdn2.thecatapi.com/images/c47.jpg',
    'https://cdn2.thecatapi.com/images/cib.jpg'
];

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
        return data.message; //It returns array of 12 URLs.
    }

    catch (error) {
        console.log('Failed to fetch dog images:', error);
        return Fallback_Dogs;
    }

}

async function fetchCats() {
    try {
        const response = await fetch(CAT_API);
        const data = await response.json();
        return data.map(cat => cat.url); //It returns array of 12 URLs.


       
    }
    catch (error) {
        console.log('Failed to fetch cat images:', error);
        return Fallback_Cat;
    }
}
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

    const featuredGrid = document.getElementById('featuredGrid');
    const lovelyGrid = document.getElementById('lovelyGrid');


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




loadPets();